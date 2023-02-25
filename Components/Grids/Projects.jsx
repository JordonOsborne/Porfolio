import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Projects() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('My-Work', id)
		setShowForm(true)
	}
	return (
		<div
			id={styles.Projects}
			className={styles.Grid}
		>
			{data.map((project) => (
				<div
					key={project.id}
					id={project.id}
					className={styles.Card}
					onClick={() => EditForm(project.id)}
				>
					<img
						src={project.Image}
						alt={`${project.Project} Image`}
						width='100px'
						height='100px'
					/>
				</div>
			))}
		</div>
	)
}
export default Projects
