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
		<table className={styles.Collection}>
			<thead>
				<tr>
					<th>Form</th>
					<th>Subject</th>
					<th>Submitted</th>
				</tr>
			</thead>
			<tbody>
				{data.map((communication) => {
					return (
						<tr
							key={communication.id}
							id={communication.id}
						>
							<td onClick={() => EditForm(communication.id)}>
								{communication?.Form}
							</td>
							<td>{communication?.Subject}</td>
							<td>{communication?.Submitted?.toDate().toDateString()}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Communications
