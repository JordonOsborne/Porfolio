import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'
import Uploading from './Uploading'

function Upload({ Id, Label, Types, Required, Multiple, filePath, Source }) {
	const { UploadFile, uploading } = useContext(FirebaseAPI)
	const handleUpload = (e) => {
		e.target.disabled = true
		const file = e.target.files[0]
		try {
			file && UploadFile(Id, file, filePath)
		} catch (err) {
			e.target.disabled = false
		}
	}

	return (
		<>
			{Source ? (
				<div className={styles.ImageUpload}>
					<img
						src={Source}
						alt={`${Label} Image`}
						title={`Upload New ${Label}`}
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
					className={styles.ImageUpload}
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
