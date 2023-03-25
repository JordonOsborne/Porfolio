import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Users() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Users', id)
		setShowForm(true)
	}
	return (
		<table className={styles.Collection}>
			<thead>
				<tr>
					<th>Display Name</th>
					<th>Company Name</th>
					<th>Phone Number</th>
					<th>Email</th>
					<th>Created</th>
				</tr>
			</thead>
			<tbody>
				{data.map((user) => {
					return (
						<tr
							key={user.id}
							id={user.id}
						>
							<td onClick={() => EditForm(user.id)}>
								{user?.FirstName + ' ' + user?.LastName}
							</td>
							<td>{user?.Company?.id}</td>
							<td>{user?.Phone}</td>
							<td>{user?.Email}</td>
							<td>{user?.Created?.toDate().toDateString()}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Users
