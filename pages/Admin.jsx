import Header from '../Components/Header'
import UserPanel from '../Components/UserPanel'
import TableSelector from '../Components/Admin/TableSelector'
import Loading from '../Components/Reusable/Loading'
import FormSwitch from '../Components/Forms/_FormSwitch'
import ViewSwitch from '../Components/Admin/ViewSwitch'
import styles from '../styles/Admin.module.scss'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

export default function Admin() {
	const { user } = useContext(AuthContext)
	const { isLoading, showForm } = useContext(FirebaseAPI)
	const router = useRouter()

	useEffect(() => {
		if (!user?.isAdmin) {
			router.push('/Denied')
		}
	}, [user])

	return (
		<div id='Page'>
			<ToastContainer />
			<Header />
			<div id={styles.Admin}>
				<UserPanel />
				{user && (
					<main>
						<div id='Company'>
							<h1>Site Administrator</h1>
						</div>
						<TableSelector />
						{isLoading ? <Loading /> : <ViewSwitch />}
						{showForm && <FormSwitch />}
					</main>
				)}
			</div>
		</div>
	)
}
