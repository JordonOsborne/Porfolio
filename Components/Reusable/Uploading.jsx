import styles from '../../styles/Loaders.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Uploading(Id) {
	const { percent } = useContext(FirebaseAPI)
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
