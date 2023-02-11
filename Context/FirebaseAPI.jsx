import { db, auth } from '../firebase.config'
import { createContext, useState, useEffect, useCallback } from 'react'
import {
	collection,
	query,
	doc,
	getDocs,
	getDoc,
	getCountFromServer,
	setDoc,
	serverTimestamp,
} from 'firebase/firestore'

const FirebaseAPI = createContext()

export const FirebaseProvider = ({ children }) => {
	const [collectionTotals, setCollectionTotals] = useState({})
	const [table, setTable] = useState('Clients')
	const [data, setData] = useState([])
	const [formData, setFormData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [updates, setUpdates] = useState(0)

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
	}, [table, updates])

	// GET ALL DATA IN COLLECTION
	const GetData = async (selected, isDropdown) => {
		if (!isDropdown) {
			setIsLoading(true)
		}
		const q = query(collection(db, selected))
		const dataRaw = await getDocs(q)
		let data = []
		dataRaw.forEach((doc) => {
			let item = doc.data()
			item.id = doc.id
			data.push(item)
		})
		if (!isDropdown) {
			setData(data)
			setIsLoading(false)
		}
		return data
	}

	// GET DOCUMENT DATA
	const GetDoc = async (table, selected) => {
		setIsLoading(true)
		const docRef = doc(db, table, selected)
		const data = await getDoc(docRef)
		setFormData(data)
		setIsLoading(false)
		return data.data()
	}

	// GET COLLECTION TOTALS
	const GetCollectionTotal = async (table) => {
		let count = 0
		count = await getCountFromServer(collection(db, table))
		return count.data().count
	}

	// SUBMIT FORM DATA TO DATABASE
	const SaveForm = async (table, id, data) => {
		data.Updated = serverTimestamp()
		data.UpdatedBy = auth.currentUser.uid
		try {
			const docRef = doc(db, table, id)
			const success = await setDoc(docRef, data)
			setUpdates(updates + 1)
			return data
		} catch (error) {
			console.log(error.message)
			return false
		}
	}

	// CONVERT TO UTC TIME (ADD 5 HOURS)
	const ConvertUTC = (date) => {
		date.setHours(date.getHours() + 5)
		return date
	}

	return (
		<FirebaseAPI.Provider
			value={{
				collectionTotals,
				table,
				data,
				formData,
				isLoading,
				GetData,
				GetDoc,
				ConvertUTC,
				SaveForm,
				setCollectionTotals,
				setTable,
				setData,
				setFormData,
				setIsLoading,
			}}
		>
			{children}
		</FirebaseAPI.Provider>
	)
}

export default FirebaseAPI
