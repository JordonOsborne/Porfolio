import { db, auth } from '../firebase.config'
import { FormIsValid } from '../Utilities/Form'
import { createContext, useState, useEffect } from 'react'
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
	const [collectionTotals, setCollectionTotals] = useState({
		Clients: 0,
		Users: 0,
		Work: 0,
		Communications: 0,
		Invoices: 0,
	})
	const [table, setTable] = useState('Users')
	const [data, setData] = useState([])
	const [formData, setFormData] = useState(null)
	const [showForm, setShowForm] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	// const [updates, setUpdates] = useState(0)
	// const [deletes, setDeletes] = useState(0)

	useEffect(() => {
		const getCollectionTotals = async () => {
			const clientCount = await GetCollectionTotal('Clients')
			const userCount = await GetCollectionTotal('Users')
			const workCount = await GetCollectionTotal('My-Work')
			const communicationCount = await GetCollectionTotal('Communications')
			const invoiceCount = await GetCollectionTotal('Invoices')
			setCollectionTotals({
				Clients: clientCount,
				Users: userCount,
				Work: workCount,
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
			if (input.nodeName === 'INPUT' && input.id !== 'Id') {
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
				} else {
					id = null
				}
			}
		})
		console.log('htmlFormData: ', { Id: id, Data: data })
		return { Id: id, Data: data }
	}

	// SUBMIT FORM - VALIDATION INCLUDED
	const SubmitForm = async () => {
		const allFields = Array.from(document[table].elements)
		if (FormIsValid(allFields)) {
			const htmlFormData = GetHTMLFormData()
			const newData = await SaveForm(htmlFormData.Id, htmlFormData.Data)
			setData([...data, newData])
			setFormData(null)
			setShowForm(false)
		}
	}

	// SUBMIT FORM DATA TO DATABASE
	const SaveForm = async (id, data) => {
		data.Updated = serverTimestamp()
		data.UpdatedBy = auth.currentUser.uid
		try {
			const docRef = doc(db, table, id)
			const success = await setDoc(docRef, data)
			setCollectionTotals({
				...collectionTotals,
				[table]: collectionTotals[table] + 1,
			})
			console.log('Form Saved Successfully')
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
			console.log('Form Deleted')
		} catch (error) {
			console.log('Delete Doc Failed: ', error.message)
		}
	}

	return (
		<FirebaseAPI.Provider
			value={{
				collectionTotals,
				table,
				data,
				formData,
				showForm,
				isLoading,
				GetData,
				GetDoc,
				ConvertUTC,
				SubmitForm,
				DeleteDoc,
				setCollectionTotals,
				setTable,
				setData,
				setFormData,
				GetHTMLFormData,
				setShowForm,
				setIsLoading,
			}}
		>
			{children}
		</FirebaseAPI.Provider>
	)
}

export default FirebaseAPI
