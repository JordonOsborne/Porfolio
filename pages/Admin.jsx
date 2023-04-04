import Header from '../Components/Header'
import UserPanel from '../Components/Admin/UserPanel'
import TableSelector from '../Components/Admin/TableSelector'
import Loading from '../Components/Reusable/Loading'
import FormSwitch from '../Components/Forms/_FormSwitch'
import ViewSwitch from '../Components/Admin/ViewSwitch'
import styles from '../styles/Admin.module.scss'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'

export default function Admin() {
	const { user } = useContext(AuthContext)
	const { isLoading, showForm } = useContext(FirebaseAPI)

	return (
		<div id='Page'>
			<ToastContainer />
			<Header />
			<div id={styles.Admin}>
				<UserPanel />
				{user && (
					<main>
						<div id='Company'>
							<h1>
								{user.isAdmin ? 'Site Administrator' : user?.Company?.Company}
							</h1>
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
