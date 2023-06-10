import styles from '../../../styles/Project.module.scss'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Reusable/Loading'
import { MdAccountCircle } from 'react-icons/md'
import AuthContext from '../../../Context/AuthContext'
import FirebaseAPI from '../../../Context/FirebaseAPI'
import FirestoreAPI from '../../../Context/FirestoreAPI'
import { ToastContainer } from 'react-toastify'
import { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Project() {
	const { user } = useContext(AuthContext)
	const { isLoading, GetProject, project } = useContext(FirebaseAPI)
	const router = useRouter()
	const { Id } = router.query

	useEffect(() => {
		if (router.isReady) {
			GetProject(Id)
		}
	}, [router.isReady])

	return (
		<div id='Page'>
			<ToastContainer />
			<Header />
			{isLoading || !project ? (
				<Loading />
			) : (
				<>
					{user && (
						<main id={styles.Project}>
							<div className={styles.Heading}>
								<h1>{project.Project}</h1>
								<div className={styles.Stats}>
									<span>
										<MdAccountCircle />
										<h3>{`${project.Users} Users`}</h3>
									</span>
									<span>
										<MdAccountCircle />
										<h3>{`${project.Forms} Forms`}</h3>
									</span>
									<span>
										<MdAccountCircle />
										<h3>{`${project.Automations} Automations`}</h3>
									</span>
									<span>
										<MdAccountCircle />
										<h3>{`${project.Reports} Reports`}</h3>
									</span>
								</div>
								<p>{project.Description}</p>
								<div className={styles.Images}>
									<div className={styles.MockUp}>
										<Image
											src={project?.Company?.Logo}
											alt={`${project?.Company?.Company} Logo`}
											width={project?.Company?.id === 'EMN' ? '175px' : '25px'}
											height='25px'
											className={styles.Company}
										/>
										{project?.Company?.id !== 'EMN' && (
											<h4>{project?.Company.Company}</h4>
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
											src='/img/MockUp.png'
											alt={`${project.Project} Image`}
											width='300px'
											height='225px'
										/>
									)}
									<div className={styles.Gallery}>
										{project.Images &&
											project?.Images.map((image, index) => {
												return (
													<Image
														key={image}
														src={image}
														alt={`Image ${index}`}
														width='100px'
														height='75px'
													/>
												)
											})}
									</div>
								</div>
								<div className={styles.Technology}>
									<h3>Technology Used:</h3>
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
							</div>
							<div className={styles.Details}></div>
						</main>
					)}
				</>
			)}
		</div>
	)
}

export default Project
