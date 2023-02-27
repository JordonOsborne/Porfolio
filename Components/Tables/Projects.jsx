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
		<table className={styles.Collection}>
			<thead>
				<tr>
					<th>Project</th>
					<th>Date</th>
					<th>Description</th>
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
							<td>{project?.Description}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Projects
