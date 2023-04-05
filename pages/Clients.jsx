import Header from '../Components/Header'
import styles from '../styles/Admin.module.scss'
import Loading from '../Components/Reusable/Loading'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

function Client() {
	const { user } = useContext(AuthContext)
	const { isLoading, data, GetData } = useContext(FirebaseAPI)
	const router = useRouter()
	const [clients, setClients] = useState([])

	useEffect(() => {
		if (user?.isAdmin) {
			const getClients = async () => {
				const Clients = await GetData('Clients')
				let clients = []
				Clients.map((client) => {
					clients.push(client)
				})
				setClients(clients)
			}
			getClients()
		} else if (user) {
			router.push('/Denied')
		}
	}, [user])

	return (
		<div id='Page'>
			<ToastContainer />
			<Header />
			{isLoading ? (
				<Loading />
			) : (
				<div id={styles.Company}>
					<h1>Client Portal</h1>
					<div
						id={styles.Clients}
						className={styles.Grid}
					>
						{clients.map((client) => (
							<div
								key={client.id}
								id={client.id}
								className={styles.Card}
								onClick={() => EditForm(client.id)}
							>
								<img
									src={client.Logo}
									alt={`${client.Client} Logo`}
									height='100px'
								/>
								<h3>{client.Client}</h3>
								<p>{`Client Since ${client?.Since?.toDate().toDateString()}`}</p>
								<p>{client?.Contact?.displayName}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Client
