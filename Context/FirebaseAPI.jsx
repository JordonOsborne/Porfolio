import { db, auth } from '../firebase.config'
import { useRouter } from 'next/router'
import { FormIsValid, RequiredFields } from '../Utilities/Form'
import { createContext, useState, useEffect, useContext } from 'react'
import { updateProfile } from 'firebase/auth'
import AuthContext from '../Context/AuthContext'
import {
	collection,
	query,
	where,
	orderBy,
	addDoc,
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
	const router = useRouter()
	const { user, setUser } = useContext(AuthContext)
	const [collectionTotals, setCollectionTotals] = useState({
		Clients: 0,
		Users: 0,
		Work: 0,
		Communications: 0,
		Invoices: 0,
	})
	const [table, setTable] = useState('Users')
	const [company, setCompany] = useState(user?.Company)
	const [views, setViews] = useState('All')
	const [view, setView] = useState('All')
	const [viewType, setViewType] = useState('List')
	const [data, setData] = useState([])
	const [formData, setFormData] = useState(null)
	const [formUpdates, setFormUpdates] = useState({})
	const [showForm, setShowForm] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [value, onChange] = useState(null)

	useEffect(() => {
		if (router.asPath !== '/Admin') {
			console.log('Not Admin Page')
		} else {
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
				const DefaultView = GetViews()
				setView('All')
				getCollectionTotals()
				GetData(table, DefaultView?.filter, DefaultView?.sort)
			}
		}
	}, [table])

	// GET COLLECTION TOTALS
	const GetCollectionTotal = async (table) => {
		let count = 0
		if (user?.isAdmin) {
			count = await getCountFromServer(collection(db, table))
			return count.data().count
		} else if (table !== 'Clients' && table !== 'Projects') {
			try {
				const ClientFilter = where('Client', '==', user?.Company?.id)
				const q = query(collection(db, table), ClientFilter)
				const dataRaw = await getDocs(q)
				count = dataRaw.docs.length
			} catch (error) {
				console.log(
					'Collection Total Query Failed for ',
					table,
					':',
					error.message
				)
				count = NaN
			}
			return count
		}
	}

	// GET ALL DATA IN COLLECTION
	const GetData = async (table, filter, sort, isDropdown) => {
		let data = []
		let q = query(collection(db, table))
		if (!isDropdown) {
			setIsLoading(true)
		}
		if (filter) {
			filter = filter.split(' ')
			// CHECK FOR BOOLEAN FIELD
			if (filter.at(-1) == 'true' || filter.at(-1) == 'false') {
				filter.at(-1) == 'true'
					? (filter[2] = filter.at(-1) == 'true')
					: (filter[2] = filter.at(-1) == 'false')
			}
			filter = where(filter[0], filter[1], filter[2])
		}
		if (filter && sort) {
			q = query(collection(db, table), filter, orderBy(sort.field, sort.type))
		} else if (filter) {
			q = query(collection(db, table), filter)
		} else if (sort) {
			q = query(collection(db, table), orderBy(sort.field, sort.type))
		}
		try {
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

	// COLLECTION QUERIES
	const GetViews = (Client) => {
		let defaultView = {
			filter: user?.isAdmin ? null : `Client == ${user?.Company?.id}`,
		}
		if (Client) {
			defaultView = { filter: `Client == ${Client}` }
		}
		switch (table) {
			case 'Clients':
				setViews([
					{ id: 'All', sort: { field: 'Client', type: 'asc' } },
					{
						id: 'Active',
						filter: 'Active == true',
						sort: { field: 'Client', type: 'asc' },
					},
				])
				defaultView = { sort: { field: 'Client', type: 'asc' } }
				break
			case 'Users':
				setViews([
					{
						id: 'All',
						filter: user?.isAdmin ? null : `Client == ${user?.Company?.id}`,
						sort: { field: 'LastName', type: 'asc' },
					},
				])
				defaultView.sort = { field: 'LastName', type: 'asc' }
				break
			case 'Communications':
				setViews([
					{
						id: 'All',
						filter: user?.isAdmin ? null : `Client == ${user?.Company?.id}`,
						sort: { field: 'Created', type: 'asc' },
					},
				])
				defaultView.sort = { field: 'Created', type: 'asc' }
				break
			case 'Invoices':
				setViews([
					{
						id: 'All',
						filter: user?.isAdmin ? null : `Client == ${user?.Company?.id}`,
						sort: { field: 'Created', type: 'asc' },
					},
				])
				defaultView.sort = { field: 'Date', type: 'desc' }
				break
			default:
				setViews([])
				break
		}
		return defaultView
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
		return data
	}

	// GET COMPANY INFORMATION
	const GetCompany = async (client) => {
		try {
			const docRef = doc(db, 'Clients', client)
			const dataRaw = await getDoc(docRef)
			const CompanyInfo = dataRaw.data()
			setCompany(CompanyInfo)
		} catch (error) {
			console.log('Failed to get Company Info: ', error.message)
		}
	}

	// GET FORM ID
	const GetFormId = () => {
		// CHECK IF NEW FORM OR UPDATE
		if (document[table].id.includes('New')) {
			switch (table) {
				case 'Clients':
					return document.getElementById('Id').value
				case 'Projects':
					return `${formUpdates.Company.id}-${formUpdates.Project.replace(
						/ /g,
						'-'
					)}`
				default:
					return null
			}
		} else {
			return document[table].id
		}
	}

	// GET INPUT DATA
	const InputUpdates = (input) => {
		input = input.target
		let data = {}
		if (input.id !== 'Id') {
			const parentDiv = input.parentElement.parentElement
			// CHECK FOR DROPDOWN
			if (!parentDiv.classList.value.includes('dropdown')) {
				switch (input.type) {
					case 'checkbox':
						// CHECK FOR MULTI-SELECT
						if (parentDiv.nodeName === 'FIELDSET') {
							data = []
							const options = Array.from(parentDiv.elements)
							options.forEach((option) => {
								if (option.nodeName === 'INPUT' && option.checked) {
									const obj = JSON.parse(option.dataset.selected)
									data = [...data, obj]
								}
							})
							data = { [parentDiv.id]: data }
							break
						}
						data = { [input.id]: input.checked }
						break
					case 'date':
						const date = ConvertUTC(input.valueAsDate)
						data = {
							[input.id]: Timestamp.fromDate(date),
						}
						break
					default:
						data = { [input.id]: input.value }
						break
				}
				setFormUpdates({ ...formUpdates, ...data })
				return data
			}
		}
	}

	// GET DROP DOWN UPDATES
	const DropdownUpdates = (input) => {
		input = input.target
		const obj = JSON.parse(input.dataset.value)
		data = { [input.dataset.id]: obj }
		setFormUpdates({ ...formUpdates, ...data })
		return data
	}

	// GET RICH TEXT EDITOR UPDATES
	const RichTextUpdates = () => {
		const RTEs = document.getElementsByClassName('ql-editor')
		let data = {}
		Array.from(RTEs).forEach((input) => {
			const id = input.parentElement.parentElement.previousSibling.id
			data = { ...data, [id]: input.innerHTML }
		})
		setFormUpdates({ ...formUpdates, ...data })
		return data
	}

	// GET AUTO-FILLED DATA
	const AutoFillUpdates = (Form) => {
		let AutoFills = {}
		const isAutoFilled = (el) =>
			window
				.getComputedStyle(el)
				.getPropertyValue('background-color')
				.toString() !== 'rgb(255, 255, 255)'
		Array.from(Form).forEach((element) => {
			if (
				element.id != 'Id' &&
				element.nodeName === 'INPUT' &&
				isAutoFilled(element)
			) {
				const update = { [element.name]: element.value }
				AutoFills = { ...AutoFills, ...update }
			}
		})
		return AutoFills
	}

	// GET READ-ONLY DATA
	const CalculatedValues = () => {
		let CalculatedData = {}
		const Form = document.querySelectorAll('[data-calc]')
		Array.from(Form).forEach((element) => {
			if (element.dataset.calc !== undefined) {
				try {
					const jsonData = JSON.parse(element.dataset.calc)
					const update = { [element.id]: jsonData }
					CalculatedData = { ...CalculatedData, ...update }
				} catch (error) {
					const update = { [element.id]: element.dataset.calc }
					CalculatedData = { ...CalculatedData, ...update }
				}
			}
		})
		console.log(CalculatedData)
		return CalculatedData
	}

	// SUBMIT FORM - VALIDATION INCLUDED
	const SubmitForm = async () => {
		const Form = document[table]
		const requirements = RequiredFields(table)
		if (FormIsValid(requirements)) {
			const calculatedValues = CalculatedValues()
			const autoFillUpdates = AutoFillUpdates(Form)
			const rteUpdates = RichTextUpdates()
			if (formData?.id) {
				delete formData.id
			}
			const docId = GetFormId()
			user.isAdmin && delete user.Company
			const newDoc = {
				Created: serverTimestamp(),
				CreatedBy: user,
				...formData,
				...calculatedValues,
				...autoFillUpdates,
				...formUpdates,
				...rteUpdates,
				Updated: serverTimestamp(),
				UpdatedBy: user,
			}
			const newData = await SaveForm(docId, newDoc)
			const tempData = data.filter((item) => item.id !== docId)
			const existingItem = data.find((item) => item.id === docId)
			setData([...tempData, newData])
			setFormData(null)
			setFormUpdates(null)
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
		try {
			if (id) {
				const docRef = doc(db, table, id)
				await setDoc(docRef, data)
				data.id = id
			} else {
				const dbRef = collection(db, table)
				const newDoc = await addDoc(dbRef, data)
				data.id = newDoc.id
			}
			console.log(data)
			return data
		} catch (error) {
			console.log('Save Form Failed: ', error.message)
			return false
		}
	}

	// CONVERT TO UTC TIME (ADD 5 HOURS)
	const ConvertUTC = (date) => {
		try {
			date.setHours(date.getHours() + 5)
			return date
		} catch (error) {
			console.log(error.message)
		}
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
				company,
				views,
				view,
				viewType,
				data,
				formData,
				formUpdates,
				value,
				showForm,
				isLoading,
				GetCompany,
				GetViews,
				GetData,
				GetDoc,
				ConvertUTC,
				SubmitForm,
				DeleteDoc,
				setCollectionTotals,
				setTable,
				setView,
				setViewType,
				setData,
				setFormData,
				setFormUpdates,
				InputUpdates,
				DropdownUpdates,
				RichTextUpdates,
				setShowForm,
				setIsLoading,
				AssignURLs,
			}}
		>
			{children}
		</FirebaseAPI.Provider>
	)
}

export default FirebaseAPI
