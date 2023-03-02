import { db, auth, storage } from '../firebase.config'
import { FormIsValid, RequiredFields } from '../Utilities/Form'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { createContext, useState, useEffect, useContext } from 'react'
import { updateProfile } from 'firebase/auth'
import AuthContext from '../Context/AuthContext'
import {
	collection,
	query,
	doc,
	getDocs,
	getDoc,
	getCountFromServer,
	setDoc,
	serverTimestamp,
	Timestamp,
	deleteDoc,
} from 'firebase/firestore'

const FirebaseAPI = createContext()

export const FirebaseProvider = ({ children }) => {
	const { user, setUser } = useContext(AuthContext)
	const [collectionTotals, setCollectionTotals] = useState({
		Clients: 0,
		Users: 0,
		Work: 0,
		Communications: 0,
		Invoices: 0,
	})
	const [table, setTable] = useState('Users')
	const [viewType, setViewType] = useState('List')
	const [data, setData] = useState([])
	const [formData, setFormData] = useState(null)
	const [savedFiles, setSavedFiles] = useState([])
	const [showForm, setShowForm] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [percent, setPercent] = useState(0)
	const [uploading, setUploading] = useState(false)
	const [value, onChange] = useState(null)

	useEffect(() => {
		const getCollectionTotals = async () => {
			const clientCount = await GetCollectionTotal('Clients')
			const userCount = await GetCollectionTotal('Users')
			const projectCount = await GetCollectionTotal('Projects')
			const communicationCount = await GetCollectionTotal('Communications')
			const invoiceCount = await GetCollectionTotal('Invoices')
			setCollectionTotals({
				Clients: clientCount,
				Users: userCount,
				Projects: projectCount,
				Communications: communicationCount,
				Invoices: invoiceCount,
			})
			setIsLoading(false)
		}
		setIsLoading(true)
		if (table !== null) {
			GetData(table)
			getCollectionTotals()
		}
	}, [table])

	// GET COLLECTION TOTALS
	const GetCollectionTotal = async (table) => {
		let count = 0
		count = await getCountFromServer(collection(db, table))
		return count.data().count
	}

	// GET ALL DATA IN COLLECTION
	const GetData = async (table, isDropdown) => {
		let data = []
		if (!isDropdown) {
			setIsLoading(true)
		}
		try {
			const q = query(collection(db, table))
			const dataRaw = await getDocs(q)
			dataRaw.forEach((doc) => {
				let item = doc.data()
				item.id = doc.id
				data.push(item)
			})
		} catch (error) {
			console.log('Data Fetch Failed: ', error.message)
		}
		if (!isDropdown) {
			setData(data)
			setIsLoading(false)
		}
		return data
	}

	// GET DOCUMENT DATA
	const GetDoc = async (table, id) => {
		setIsLoading(true)
		try {
			const docRef = doc(db, table, id)
			const dataRaw = await getDoc(docRef)
			const data = dataRaw.data()
			data.id = id
			setFormData(data)
		} catch (error) {
			setFormData(null)
		}
		setIsLoading(false)
	}

	// GET HTML FORM DATA
	const GetHTMLFormData = () => {
		let data, id
		Array.from(document[table].elements).forEach((input) => {
			if (
				input.nodeName === 'INPUT' &&
				input.id !== 'Id' &&
				input.dataset.link !== 'https://quilljs.com'
			) {
				console.log(input)
				// CHECK FOR DROPDOWN OBJECT VALUES
				if (input.dataset.value === undefined) {
					switch (input.type) {
						case 'date':
							const date = ConvertUTC(input.valueAsDate)
							data = {
								...data,
								[input.id]: Timestamp.fromDate(date),
							}
							break
						default:
							data = { ...data, [input.id]: input.value }
							break
					}
				} else {
					const obj = JSON.parse(input.dataset.value)
					obj.id = obj.value
					delete obj.value
					data = { ...data, [input.id]: obj }
				}
			} else {
				if (input.id !== undefined) {
					id = input.value
				}
			}
		})
		// CHECK FOR RICH TEXT EDITOR
		const rte = document.getElementsByClassName('quill')[0]
		if (rte !== undefined) {
			const field = rte.previousSibling.id
			const rteInput = rte.getElementsByClassName('ql-editor')[0]
			data = { ...data, [field]: rteInput.innerHTML }
		}
		// CHECK IF NEW FORM OR UPDATE
		if (document[table].id.includes('New')) {
			id = null
		} else {
			id = document[table].id
		}
		return { Id: id, Data: data }
	}

	// SUBMIT FORM - VALIDATION INCLUDED
	const SubmitForm = async () => {
		const requirements = RequiredFields(table)
		if (FormIsValid(requirements)) {
			delete formData.id
			const htmlFormData = GetHTMLFormData()
			const docId = htmlFormData.Id
			const newDoc = {
				...formData,
				...htmlFormData.Data,
				Updated: serverTimestamp(),
				UpdatedBy: auth.currentUser.uid,
			}
			const newData = await SaveForm(docId, newDoc)
			const tempData = data.filter((item) => item.id !== docId)
			const existingItem = data.find((item) => item.id === docId)
			setData([...tempData, newData])
			setFormData(null)
			onChange(null)
			setShowForm(false)
			!existingItem &&
				setCollectionTotals({
					...collectionTotals,
					[table]: collectionTotals[table] + 1,
				})
		}
	}

	// SUBMIT FORM DATA TO DATABASE
	const SaveForm = async (id, data) => {
		console.log('data: ', data)
		try {
			const docRef = doc(db, table, id)
			await setDoc(docRef, data)
			data.id = id
			return data
		} catch (error) {
			console.log('Save Form Failed: ', error.message)
			return false
		}
	}

	// CONVERT TO UTC TIME (ADD 5 HOURS)
	const ConvertUTC = (date) => {
		date.setHours(date.getHours() + 5)
		return date
	}

	// DELETE DOCUMENT
	const DeleteDoc = (table, id) => {
		try {
			const docRef = doc(db, table, id)
			deleteDoc(docRef)
			setData(data.filter((item) => item.id !== id))
			setCollectionTotals({
				...collectionTotals,
				[table]: collectionTotals[table] - 1,
			})
			setFormData(null)
			setShowForm(false)
		} catch (error) {
			console.log('Delete Doc Failed: ', error.message)
		}
	}

	// UPLOAD FILE TO STORAGE
	const UploadFile = async (file, filePath) => {
		setUploading(true)
		const fileRef = ref(storage, filePath ? filePath : file.name)
		// UPLOAD TO FIRE STORAGE
		const uploadTask = uploadBytesResumable(fileRef, file)
		uploadTask.on(
			'state_changed',
			// DURING UPLOAD
			(snapshot) => {
				const percent = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				setPercent(percent)
				percent === 100
			},
			// ON UPLOAD ERROR
			(error) => {
				setUploading(false)
				switch (error.code) {
					case 'storage/unauthorized':
						console.log('User does not have permission to access the object')
						break
					case 'storage/canceled':
						console.log('User canceled the upload')
						break
					default:
						console.log('Unknown Error:', error.message)
				}
			},
			// ON SUCCESSFUL UPLOAD
			() => {
				console.log('File Saved!')
			}
		)
		const completedTask = await uploadTask
		const url = await getDownloadURL(completedTask.ref)
		return url
	}

	// ASSIGN FILE URL TO DOCUMENT
	const AssignURLs = async (Id, urls) => {
		try {
			const update = { [Id]: urls }
			const newDoc = { ...formData, ...update }
			delete newDoc.id
			if (Id === 'PhotoURL') {
				const docRef = doc(db, 'Users', user.uid)
				const data = { PhotoURL: urls }
				await updateProfile(auth.currentUser, { photoURL: urls })
				await setDoc(docRef, { ...user, ...data })
				setUser({ ...user, ...data })
			} else {
				const newData = await SaveForm(formData.id, newDoc)
				setFormData(newData)
			}
			setUploading(false)
			return urls
		} catch (error) {
			console.log(error.message)
			return false
		}
	}

	return (
		<FirebaseAPI.Provider
			value={{
				collectionTotals,
				table,
				viewType,
				data,
				formData,
				value,
				showForm,
				isLoading,
				uploading,
				percent,
				GetData,
				GetDoc,
				ConvertUTC,
				SubmitForm,
				DeleteDoc,
				setCollectionTotals,
				setTable,
				setViewType,
				setData,
				setFormData,
				onChange,
				GetHTMLFormData,
				setShowForm,
				setIsLoading,
				UploadFile,
				AssignURLs,
			}}
		>
			{children}
		</FirebaseAPI.Provider>
	)
}

export default FirebaseAPI
