import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Communications() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Communications', id)
		setShowForm(true)
	}
	return (
		<div
			id={styles.Communications}
			className={styles.Grid}
		>
			{data.map((communication) => (
				<div
					key={communication.id}
					id={communication.id}
					className={styles.Card}
					onClick={() => EditForm(communication.id)}
				>
					<h3>{communication.Form}</h3>
				</div>
			))}
		</div>
	)
}
export default Communications
