import Header from '../Components/Header'
import styles from '../styles/Admin.module.scss'
import Loading from '../Components/Reusable/Loading'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Client() {
	const { user } = useContext(AuthContext)
	const { isLoading, GetData } = useContext(FirebaseAPI)
	const router = useRouter()
	const [clients, setClients] = useState()
	const [projects, setProjects] = useState([])
	const [invoices, setInvoices] = useState([])

	useEffect(() => {
		if (user?.isAdmin) {
			const getClients = async () => {
				const Clients = await GetData('Clients')
				let clients = []
				Clients.map((client) => {
					client.Projects = projects.filter(
						(project) => project.Company.id === client.id
					)
					client.Invoices = invoices.filter(
						(invoice) => invoice.Client === client.id
					)
					clients.push(client)
				})
				setClients(clients)
			}
			const getProjects = async () => {
				const Projects = await GetData('Projects')
				let projects = []
				Projects.map((project) => {
					projects.push(project)
				})
				setProjects(projects)
			}
			const getInvoices = async () => {
				const Invoices = await GetData('Invoices')
				let invoices = []
				Invoices.map((invoice) => {
					invoices.push(invoice)
				})
				setInvoices(invoices)
			}
			getProjects()
			getInvoices()
			getClients()
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
					<h1>Clients</h1>
					<div
						id={styles.Clients}
						className={styles.Grid}
					>
						{clients &&
							clients.map((client) => (
								<div
									key={client.id}
									id={client.id}
									className={styles.Card}
									// onClick={() => router.push(`/Clients/${client.id}`)}
								>
									<Image
										src={client?.Logo}
										alt={`${client.Client} Logo`}
										height='100px'
										width='100px'
									/>
									<h3>{client.Client}</h3>
									{user.isAdmin && (
										<button
											onClick={() => router.push(`/ClientPortal/${client.id}`)}
										>
											View Client Portal
										</button>
									)}
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
