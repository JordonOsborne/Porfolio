import Header from '../Components/Header'
import UserPanel from '../Components/UserPanel'
import ProjectCard from '../Components/ProjectCard'
import Loading from '../Components/Reusable/Loading'
import styles from '../styles/Admin.module.scss'
import FirebaseAPI from '../Context/FirebaseAPI'
import { useEffect, useContext } from 'react'

export default function Projects() {
	const { GetData, data } = useContext(FirebaseAPI)

	useEffect(() => {
		GetData('Projects')
	}, [])

	console.log(data)

	return (
		<div id='Page'>
			<Header />
			<div id={styles.Admin}>
				<UserPanel />
				<main>
					<div id='Company'>
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
					</div>
				</main>
			</div>
		</div>
	)
}
