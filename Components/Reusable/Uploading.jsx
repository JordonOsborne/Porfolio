import styles from '../../styles/Loaders.module.scss'
import FirestoreAPI from '../../Context/FirestoreAPI'
import { useContext } from 'react'

function Uploading(Id) {
	const { percent } = useContext(FirestoreAPI)
	return (
		<div className={styles.loaderBlock}>
			<span class={styles.loader2}></span>
			<label htmlFor={Id}>{percent}% Complete</label>
			<progress
				id={Id}
				value={percent}
				max='100'
			>{`${percent} % Complete`}</progress>
		</div>
	)
}

export default Uploading
