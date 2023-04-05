import { auth, storage } from '../firebase.config'
import { useRouter } from 'next/router'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { createContext, useState, useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const FirestoreAPI = createContext()

export const FirestoreProvider = ({ children }) => {
	const router = useRouter()
	const { user, setUser } = useContext(AuthContext)
	const [file, setFile] = useState(null)
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

	return (
		<FirestoreAPI.Provider value={{ file, percent, UploadFile, setUploading }}>
			{children}
		</FirestoreAPI.Provider>
	)
}

export default FirestoreAPI
