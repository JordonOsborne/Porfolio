import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Projects() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Projects', id)
		setShowForm(true)
	}

	return (
		<table
			className={styles.Collection}
			data-table='Projects'
		>
			<thead>
				<tr>
					<th>Project</th>
					<th>Date</th>
					<th>Users</th>
					<th>Forms</th>
					<th>Automations</th>
					<th>Reports</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>
				{data.map((project) => {
					return (
						<tr
							key={project.id}
							id={project.id}
						>
							<td onClick={() => EditForm(project.id)}>{project?.Project}</td>
							<td>{project?.Date?.toDate().toDateString()}</td>
							<td>{project?.Users}</td>
							<td>{project?.Forms}</td>
							<td>{project?.Automations}</td>
							<td>{project?.Reports}</td>
							<td>{project?.Rating}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Projects
