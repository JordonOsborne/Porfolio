import styles from '../../styles/Admin.module.scss'
import Image from 'next/image'
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
			{data.map((project) => (
				<div
					key={project.id}
					id={project.id}
					className={styles.Card}
					onClick={() => EditForm(project.id)}
				>
					<div className={styles.Visuals}>
						<div className={styles.Company}>
							<Image
								className={styles.CompanyLogo}
								src={project?.Company?.Logo}
								alt={project?.Company?.id}
								width={project?.Company?.id === 'EMN' ? '300px' : '40px'}
								height='40px'
							/>
							{project?.Company?.id !== 'EMN' && (
								<span>{project.Company?.id}</span>
							)}
						</div>
						{project?.MockUpImg ? (
							<Image
								className={styles.MockUp}
								src={project?.MockUpImg}
								alt={`${project.Project} Image`}
								width='300px'
								height='225px'
							/>
						) : (
							<Image
								className={styles.MockUp}
								src='/img/Websites.svg'
								alt={`${project.Project} Image`}
								width='300px'
								height='225px'
							/>
						)}
					</div>
					<div className={styles.Info}>
						<a
							className={styles.Project}
							href={project?.URL}
							target='_blank'
						>
							<h3>{project?.Project}</h3>
						</a>
						<div className={styles.Technology}>
							{project?.Technology?.map((tech) => {
								return (
									<Image
										key={tech}
										src={`/Icons/${tech}.png`}
										alt={tech}
										width='30px'
										height='30px'
									/>
								)
							})}
						</div>
						<div className={styles.rteHTML}>{project?.Description}</div>
					</div>
				</div>
			))}
		</div>
	)
}
export default Projects
