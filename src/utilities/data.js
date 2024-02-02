import { db } from '../../firebase.config'
import { collection, query, where, getDocs, getDoc } from 'firebase/firestore'

// GET ALL DATA IN COLLECTION
export const GetData = async (table, filter, sort) => {
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
		console.log('Data Fetched:', data)
	} catch (error) {
		console.log('Data Fetch Failed: ', error.message)
	}
	return data
}

// GET DOCUMENT DATA
export const GetDoc = async (table, id) => {
	try {
		const docRef = doc(db, table, id)
		const dataRaw = await getDoc(docRef)
		const data = dataRaw.data()
		data.id = id
		return data
	} catch (error) {
		console.log('Failed to find data for ', id, ':', error.message)
	}
}

// RETURN FORMATED PHONE NUMBER
export const formatPhoneNumber = (phoneNumber) => {
	const cleaned = ('' + phoneNumber).replace(/\D/g, '')
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
	if (match) {
		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
	}
	return null
}
