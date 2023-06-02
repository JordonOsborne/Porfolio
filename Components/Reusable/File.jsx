import styles from '../../styles/Storage.module.scss'
import FirestoreAPI from '../../Context/FirestoreAPI'
import { useState, useContext, useEffect } from 'react'
import { IoIosDocument } from 'react-icons/io'

function File({ file }) {
	const { GetFileProperties } = useContext(FirestoreAPI)
	const [props, setProps] = useState()
	const dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	const timeOptions = {
		timeZone: 'EST',
		hour12: true,
		hour: '2-digit',
		minute: '2-digit',
	}

	useEffect(() => {
		const getProperties = async () => {
			const props = await GetFileProperties(file)
			props.updated = new Date(props.updated)
			setProps(props)
		}
		getProperties()
	}, [])

	return (
		<div className={styles.File}>
			<IoIosDocument
				title={file?.name}
				className={styles.icon}
			/>
			<h4>{file?.name}</h4>
			<p className={styles.props}>
				{`${props?.updated.toLocaleDateString('en-us', dateOptions)} 
				${props?.updated.toLocaleTimeString('en-us', timeOptions)}`}
			</p>
		</div>
	)
}

export default File
