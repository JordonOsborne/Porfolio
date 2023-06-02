import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import FirestoreAPI from '../../Context/FirestoreAPI'
import Loader from './Loading'
import { useContext, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import Uploading from './Uploading'
import UploadPreview from './UploadPreview'

function Upload({ Id, Label, Types, Required, Multiple, filePath, Source }) {
	const { AssignURLs } = useContext(FirebaseAPI)
	const { UploadFile } = useContext(FirestoreAPI)
	const [showLoader, setShowLoader] = useState(true)
	const [uploading, setUploading] = useState(false)

	const RemoveLoader = () => {
		setUploading(false)
		setShowLoader(false)
	}

	const handleUpload = async (e) => {
		e.target.disabled = true
		if (!Multiple) {
			try {
				const file = e.target.files[0]
				if (file) {
					setUploading(true)
					const url = await UploadFile(file, filePath)
					AssignURLs(Id, url)
					RemoveLoader()
				}
			} catch (error) {
				console.log(`${Id} Failed: ${error.message}`)
				e.target.disabled = false
			}
		} else {
			const files = Array.from(e.target.files)
			const promises = []
			const savedURLs = []
			files.forEach((file, index) => {
				try {
					setUploading(true)
					const twoDigitIndex = (index + 1).toLocaleString('en-US', {
						minimumIntegerDigits: 2,
						useGrouping: false,
					})
					const path = `${filePath}/${twoDigitIndex}-${file.name}`
					const upload = UploadFile(file, path)
					promises.push(upload)
				} catch (error) {
					console.log(`${file.name} Failed: ${error.message}`)
					e.target.disabled = false
				}
			})
			const urls = await Promise.all(promises)
			Source ? (savedURLs = [...Source, ...urls]) : (savedURLs = urls)
			AssignURLs(Id, savedURLs)
			RemoveLoader()
		}
	}

	return (
		<>
			{uploading ? (
				<Uploading />
			) : (
				<>
					{Source ? (
						<div
							className={Multiple ? styles.MultipleUpload : styles.ImageUpload}
						>
							<UploadPreview
								Id={Id}
								Source={Source}
								Label={Label}
								Multiple={Multiple}
								RemoveLoader={() => RemoveLoader()}
							/>
							{Source.length !== 0 && showLoader && <Loader />}
							<label
								className={styles.ImageUpload}
								htmlFor={Id}
							>
								<MdCloudUpload />
								<input
									id={Id}
									name={Id}
									type='file'
									accept={Types}
									required={Required}
									multiple={Multiple}
									onChange={handleUpload}
								/>
								{`Upload ${Label}`}
							</label>
						</div>
					) : (
						<label
							htmlFor={Id}
							className={Multiple ? styles.MultipleUpload : styles.ImageUpload}
						>
							<MdCloudUpload />
							<input
								id={Id}
								name={Id}
								type='file'
								accept={Types}
								required={Required}
								multiple={Multiple}
								onChange={handleUpload}
							/>
							{`Upload ${Label}`}
						</label>
					)}
				</>
			)}
		</>
	)
}

export default Upload
