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
		<table className={styles.Collection}>
			<thead>
				<tr>
					<th>Company Name</th>
					<th>Client Since</th>
					<th>Primary Contact</th>
					<th>Annual Charge</th>
				</tr>
			</thead>
			<tbody>
				{data.map((client) => {
					return (
						<tr
							key={client.id}
							id={client.id}
						>
							<td onClick={() => EditForm(client.id)}>{client?.Client}</td>
							<td>{client?.Since?.toDate().toDateString()}</td>
							<td>{client?.Contact?.displayName}</td>
							<td>{`$` + client?.AnnualCharge}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Clients
