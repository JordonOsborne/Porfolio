import { storage } from '../firebase.config'
import {
	ref,
	uploadBytesResumable,
	getDownloadURL,
	getMetadata,
	listAll,
} from 'firebase/storage'
import { createContext, useState, useContext } from 'react'
import FirebaseAPI from './FirebaseAPI'

const FirestoreAPI = createContext()

export const FirestoreProvider = ({ children }) => {
	const { setIsLoading } = useContext(FirebaseAPI)
	const [container, setContainer] = useState()
	const [percent, setPercent] = useState(0)

	// UPLOAD FILE TO STORAGE
	const UploadFile = async (file, filePath) => {
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

	const GetClientFiles = async (path) => {
		setIsLoading(true)
		const folderRef = ref(storage, path)
		try {
			const allItems = await listAll(folderRef)
			const files = []
			allItems.items.map((item) => {
				const file = {
					fullPath: item?.fullPath,
					name: item?.name,
				}
				files.push(file)
			})
			const folders = []
			allItems.prefixes.map(async (item) => {
				const folder = {
					fullPath: item?.fullPath,
					name: item?.name,
					parent: item.parent._location.path,
				}
				folders.push(folder)
			})
			const storage = await Promise.all([files, folders])
			setIsLoading(false)
			return storage
		} catch (error) {
			console.log('File Retrieval Failed: ', error.message)
		}
	}

	const GetFileProperties = async (file) => {
		const fileRef = ref(storage, file.fullPath)
		const meta = await getMetadata(fileRef)
		return meta
	}

	return (
		<FirestoreAPI.Provider
			value={{
				container,
				percent,
				setContainer,
				UploadFile,
				GetClientFiles,
				GetFileProperties,
			}}
		>
			{children}
		</FirestoreAPI.Provider>
	)
}

export default FirestoreAPI
