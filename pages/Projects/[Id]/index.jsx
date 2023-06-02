import styles from '../../../styles/Admin.module.scss'
import Header from '../../../Components/Header'
import Loading from '../../../Components/Reusable/Loading'
import AuthContext from '../../../Context/AuthContext'
import FirebaseAPI from '../../../Context/FirebaseAPI'
import FirestoreAPI from '../../../Context/FirestoreAPI'
import { ToastContainer } from 'react-toastify'
import { useEffect, useContext } from 'react'
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
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div id={styles.Admin}>
						{user && (
							<main>
								<h1>{project.Project}</h1>
							</main>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default Project
