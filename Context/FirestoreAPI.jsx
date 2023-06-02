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
	const [file, setFile] = useState(null)
	// const [files, setFiles] = useState([])
	// const [folders, setFolders] = useState([])
	const [percent, setPercent] = useState(0)
	const [uploading, setUploading] = useState(false)

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
		setUploading(false)
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
				file,
				percent,
				setContainer,
				UploadFile,
				GetClientFiles,
				GetFileProperties,
				setUploading,
			}}
		>
			{children}
		</FirestoreAPI.Provider>
	)
}

export default FirestoreAPI
