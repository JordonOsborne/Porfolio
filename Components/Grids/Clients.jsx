import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Clients() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Clients', id)
		setShowForm(true)
	}
	return (
		<div className={styles.Grid}>
			{data.map((client) => (
				<div
					key={client.id}
					id={client.id}
					className={styles.Card}
					onClick={() => EditForm(client.id)}
				>
					<img
						src={client.Logo}
						alt={`${client.Client} Logo`}
						height='100px'
					/>
					<h3>{client.Client}</h3>
					<p>{`Client Since ${client.Since.toDate().toDateString()}`}</p>
					<p>{client?.Contact?.displayName}</p>
				</div>
			))}
		</div>
	)
}
export default Clients
