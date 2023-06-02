import styles from '../../styles/Storage.module.scss'
import FirestoreAPI from '../../Context/FirestoreAPI'
import { useContext } from 'react'
import { IoIosFolderOpen } from 'react-icons/io'

function Folder({ folder }) {
	const { setContainer } = useContext(FirestoreAPI)
	const container = {
		parent: folder?.parent,
		name: folder?.name,
		fullPath: folder?.fullPath,
	}
	return (
		<div
			className={styles.Folder}
			onClick={() => setContainer(container)}
		>
			<IoIosFolderOpen
				title={folder?.name}
				className={styles.icon}
			/>
			<h4>{folder?.name}</h4>
		</div>
	)
}

export default Folder
