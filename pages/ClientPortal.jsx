import Header from '../Components/Header'
import styles from '../styles/Admin.module.scss'
import SignIn from '../Components/Forms/SignIn'
import AuthContext from '../Context/AuthContext'
import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

function ClientPortal() {
	const { user } = useContext(AuthContext)
	const router = useRouter()

	useEffect(() => {
		if (user) {
			user?.isAdmin
				? router.push(`Clients`)
				: router.push(`ClientPortal/${user.Company.id}`)
		}
	}, [user])

	return (
		<div id='Page'>
			<Header />
			<div id={styles.Company}>
				<h1>Client Login Portal</h1>
				<SignIn />
			</div>
		</div>
	)
}

export default ClientPortal
