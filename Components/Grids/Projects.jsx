import styles from '../../styles/Admin.module.scss'
import ProjectCard from '../Projects/ProjectCard'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Projects() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Projects', id)
		setShowForm(true)
	}
	return (
		<div
			id={styles.Projects}
			className={styles.Grid}
		>
			{data.map((Project) => (
				<ProjectCard
					Info={Project}
					key={Project.id}
				/>
			))}
		</div>
	)
}
export default Projects
