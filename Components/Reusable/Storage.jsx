import styles from '../../styles/Storage.module.scss'
import FirestoreAPI from '../../Context/FirestoreAPI'
import { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import Folder from './Folder'
import File from './File'

function Storage() {
	const { isLoading, container, setContainer, GetClientFiles } =
		useContext(FirestoreAPI)
	const [storage, setStorage] = useState({ files: [], folders: [] })
	const parent = {
		parent: null,
		name: container.parent,
		fullPath: container.parent,
	}

	useEffect(() => {
		const getStorage = async () => {
			const Storage = await GetClientFiles(container.fullPath)
			const storage = { files: Storage[0], folders: Storage[1] }
			setStorage(storage)
		}
		getStorage()
	}, [container])

	return (
		<>
			<div className={styles.Header}>
				<h2 className={styles.Container}>
					{container.parent && (
						<span onClick={() => setContainer(parent)}>{container.parent}</span>
					)}
					{container.parent ? ` / ${container.name}` : container.name}
				</h2>
				<p>Last Updated</p>
			</div>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{storage.folders.map((folder) => (
						<Folder
							key={folder.fullPath}
							folder={folder}
						/>
					))}
					{storage.files.map((file) => (
						<File
							key={file.fullPath}
							file={file}
						/>
					))}
				</>
			)}
		</>
	)
}

export default Storage
