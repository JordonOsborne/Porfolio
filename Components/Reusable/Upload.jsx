import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'
import Uploading from './Uploading'
import UploadPreview from './UploadPreview'

function Upload({ Id, Label, Types, Required, Multiple, filePath, Source }) {
	const { UploadFile, uploading, AssignURLs } = useContext(FirebaseAPI)

	const handleUpload = async (e) => {
		e.target.disabled = true
		if (!Multiple) {
			try {
				const file = e.target.files[0]
				if (file) {
					const url = UploadFile(file, filePath)
					AssignURLs(Id, url)
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
		}
	}

	return (
		<>
			{Source ? (
				<div className={Multiple ? styles.MultipleUpload : styles.ImageUpload}>
					<UploadPreview
						Source={Source}
						Label={Label}
						Multiple={Multiple}
					/>
					<label
						className={styles.ImageUpload}
						htmlFor={Id}
					>
						<input
							id={Id}
							name={Id}
							type='file'
							accept={Types}
							required={Required}
							multiple={Multiple}
							onChange={handleUpload}
						/>
						{uploading ? <Uploading /> : `Upload New ${Label}`}
					</label>
				</div>
			) : (
				<label
					htmlFor={Id}
					className={Multiple ? styles.MultipleUpload : styles.ImageUpload}
				>
					<input
						id={Id}
						name={Id}
						type='file'
						accept={Types}
						required={Required}
						multiple={Multiple}
						onChange={handleUpload}
					/>
					{uploading ? <Uploading /> : `Upload ${Label}`}
				</label>
			)}
		</>
	)
}

export default Upload
