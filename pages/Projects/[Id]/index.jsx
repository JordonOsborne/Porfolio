import styles from '../../../styles/Project.module.scss'
import Header from '../../../Components/Header'
import Main from '../../../Components/Projects/Main'
import Details from '../../../Components/Projects/Details'
import Loading from '../../../Components/Reusable/Loading'
import AuthContext from '../../../Context/AuthContext'
import FirebaseAPI from '../../../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

function Project() {
	const { user } = useContext(AuthContext)
	const { isLoading, GetProject, project } = useContext(FirebaseAPI)
	const router = useRouter()
	const { Id, Edit } = router.query

	useEffect(() => {
		if (router.isReady) {
			GetProject(Id)
		}
		if (!user.isAdmin && Edit) {
			router.push('/Denied')
			console.log('User is not Administrator')
		}
	}, [router.isReady, Edit])

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
							<Main
								project={project}
								edit={Edit}
							/>
							<Details Slug={Id} />
						</main>
					)}
				</>
			)}
		</div>
	)
}

export default Project
