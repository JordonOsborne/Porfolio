import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { MdDelete } from 'react-icons/md'
import { useContext } from 'react'

function UploadPreview({ Id, Source, Label, Multiple }) {
	const { AssignURLs } = useContext(FirebaseAPI)
	const Images = () => {
		return Source.map((url, index) => (
			<div
				className={styles.ImagePreview}
				key={index}
			>
				<img
					src={url}
					alt={`Image ${index}`}
					title={GetPath(url)}
				/>
				<MdDelete
					onClick={(e) => RemoveImg(e)}
					className={styles.DeleteImg}
				/>
			</div>
		))
	}

	const GetPath = (url) => {
		const path = new URL(url).pathname.replace(
			'/v0/b/josborne-dev.appspot.com/o',
			''
		)
		return path
	}

	const RemoveImg = async (e) => {
		const title = e.target.parentElement.firstElementChild.title
		console.log(Source)
		const savedFiles = Source.filter((item) => {
			return !GetPath(item).includes(title)
		})
		await AssignURLs(Id, savedFiles)
		console.log(`${title} Removed`)
	}

	return Multiple ? (
		Images()
	) : (
		<img
			src={Source}
			alt={Label}
			title={Label}
		/>
	)
}

export default UploadPreview
