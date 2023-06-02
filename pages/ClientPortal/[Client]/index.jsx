import styles from '../../../styles/Admin.module.scss'
import Header from '../../../Components/Header'
import TableSelector from '../../../Components/Admin/TableSelector'
import FormSwitch from '../../../Components/Forms/_FormSwitch'
import ViewSwitch from '../../../Components/Admin/ViewSwitch'
import Storage from '../../../Components/Reusable/Storage'
import Loading from '../../../Components/Reusable/Loading'
import AuthContext from '../../../Context/AuthContext'
import FirebaseAPI from '../../../Context/FirebaseAPI'
import FirestoreAPI from '../../../Context/FirestoreAPI'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Client() {
	const { user } = useContext(AuthContext)
	const { isLoading, company, GetCompany, GetData, GetViews } =
		useContext(FirebaseAPI)
	const { GetClientFiles, setContainer, showForm } = useContext(FirestoreAPI)
	const router = useRouter()
	const { Client } = router.query
	const [invoices, setInvoices] = useState([])

	useEffect(() => {
		if (router.isReady) {
			GetCompany(Client)
			setContainer({ parent: null, name: Client, fullPath: Client })
			if (user?.isAdmin || user?.Company?.id === Client) {
				const ClientFilter = GetViews(Client)
				const getInvoices = async () => {
					const Invoices = await GetData('Invoices', ClientFilter.filter)
					let invoices = []
					Invoices.map((invoice) => {
						invoices.push(invoice)
					})
					setInvoices(invoices)
				}
				getInvoices()
			}
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
								<div id={styles.Company}>
									<Image
										className={styles.CompanyLogo}
										src={company?.Logo}
										alt={company?.id}
										width={company?.id === 'EMN' ? '300px' : '40px'}
										height='40px'
									/>
									<h1>{company?.Client}</h1>
								</div>
								<TableSelector Client={Client} />
								{isLoading ? <Loading /> : <ViewSwitch Client={Client} />}
								{showForm && <FormSwitch />}
							</main>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default Client
