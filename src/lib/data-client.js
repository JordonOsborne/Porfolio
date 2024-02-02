'use client'
import { db } from '../../firebase.config'
import { createContext, useState, useEffect, useContext } from 'react'
import AuthContext from './auth'
import {
	collection,
	query,
	where,
	getDocs,
	doc,
	getDoc,
	setDoc,
	addDoc,
	deleteDoc,
	getCountFromServer,
} from 'firebase/firestore'

const Data = createContext()

export const DataProvider = ({ children }) => {
	const { user } = useContext(AuthContext)
	const [collectionTotals, setCollectionTotals] = useState({
		Clients: 0,
		Users: 0,
	})

	useEffect(() => {
		if (user?.isAmdin) {
			const GetCollectionTotals = async () => {
				const clientCount = await GetCollectionTotal('Clients')
				const userCount = await GetCollectionTotal('Users')
				setCollectionTotals({
					Clients: clientCount,
					Users: userCount,
				})
			}
			GetCollectionTotals()
		}
	}, [])

	// GET COLLECTION TOTALS
	const GetCollectionTotal = async (table) => {
		let count = 0
		if (user?.isAdmin) {
			count = await getCountFromServer(collection(db, table))
			return count.data().count
		} else if (table !== 'Clients' && table !== 'Projects') {
			try {
				const ClientFilter = where('Client', '==', user?.Company)
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
	const GetData = async (table, filter, sort) => {
		let data = []
		let q = query(collection(db, table))
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
		return data
	}

	// GET DOCUMENT DATA
	const GetDoc = async (table, id) => {
		try {
			const docRef = doc(db, table, id)
			const dataRaw = await getDoc(docRef)
			const data = dataRaw.data()
			data.id = id
			return data
		} catch (error) {
			console.log('Table: ', table)
			console.log('ID: ', id)
			console.log('Failed to find data:', error.message)
		}
	}

	// SUBMIT FORM DATA TO DATABASE
	const SaveData = async (table, id, data) => {
		data = { ...data, Updated: serverTimestamp(), UpdatedBy: user.uid }
		try {
			if (id) {
				const docRef = doc(db, table, id)
				await setDoc(docRef, data)
				data.id = id
			} else {
				data = { ...data, Created: serverTimestamp(), CreatedBy: user.uid }
				const dbRef = collection(db, table)
				const newDoc = await addDoc(dbRef, data)
				data.id = newDoc.id
			}
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
			setCollectionTotals({
				...collectionTotals,
				[table]: collectionTotals[table] - 1,
			})
		} catch (error) {
			console.log('Delete Doc Failed: ', error.message)
		}
	}

	return (
		<Data.Provider
			value={{
				GetCollectionTotal,
				GetData,
				GetDoc,
				SaveData,
				DeleteDoc,
				ConvertUTC,
			}}
		>
			{children}
		</Data.Provider>
	)
}

export default Data
