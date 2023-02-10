import Header from '../Components/Header'
import Loading from '../Components/Reusable/Loading'
import Input from '../Components/Reusable/Input'
import ViewSelector from '../Components/ViewSelector'
import FormSelector from '../Components/Forms/FormSelector'
import Table from '../Components/Table'
import styles from '../styles/Admin.module.scss'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { GetCollectionTotal } from '../Context/FirebaseAPI'
import { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase.config'
import { useRouter } from 'next/router'
import { UpdateProfile } from '../Utilities/Form'
import { FaUsers, FaFileInvoiceDollar, FaCode } from 'react-icons/fa'
import { IoMdAddCircle } from 'react-icons/io'
import { GrOrganization } from 'react-icons/gr'
import { GoCommentDiscussion } from 'react-icons/go'

export default function Admin() {
	const user = useContext(AuthContext)
	const { collection, setCollection } = useContext(FirebaseAPI)
	const router = useRouter()
	// TABLE TOTALS
	const [Clients, setClients] = useState(0)
	const [Users, setUsers] = useState(0)
	const [Work, setWork] = useState(0)
	const [Communications, setCommunications] = useState(0)
	const [Invoices, setInvoices] = useState(0)
	// SHOW-HIDE ACTIONS
	const [editProfile, setEditProfile] = useState(false)
	const [selected, setSelected] = useState('Clients')
	const [showForm, setShowForm] = useState(false)

	useEffect(() => {
		const getCollectionTotals = async () => {
			const clientCount = await GetCollectionTotal('Clients')
			setClients(clientCount)
			const userCount = await GetCollectionTotal('Users')
			setUsers(userCount)
			const workCount = await GetCollectionTotal('My-Work')
			setWork(workCount)
			const communicationCount = await GetCollectionTotal('Communications')
			setCommunications(communicationCount)
			const InvoiceCount = await GetCollectionTotal('Invoices')
			setInvoices(InvoiceCount)
		}
		getCollectionTotals()
	}, [Clients, Users, Work, Communications, Invoices])

	const LogOut = async (e) => {
		e.preventDefault()
		await auth.signOut()
		router.push('/')
	}

	const UpdateInfo = async (e) => {
		e.preventDefault()
		await UpdateProfile(user, FirstName, LastName, Phone, Email)
		auth.currentUser.getIdToken(true)
		setEditProfile(false)
	}

	return (
		<div id='Page'>
			<ToastContainer />
			<Header />
			<div id={styles.Admin}>
				<aside>
					{!user && <Loading />}
					{user && (
						<>
							<form>
								<img
									src={
										user?.photoURL === undefined ? 'NotFound' : user.photoURL
									}
									title={user?.displayName}
									width='250px'
									height='250px'
								/>
								{editProfile ? (
									<>
										<Input
											Id='FirstName'
											Label='First Name'
											Placeholder='First Name'
											Default={user.FirstName}
											Icon='Person'
										/>
										<Input
											Id='LastName'
											Label='Last Name'
											Placeholder='Last Name'
											Default={user.LastName}
											Icon='Person'
										/>
										<Input
											Id='Email'
											Label='Email'
											Placeholder='Email'
											Default={user.Email}
											Icon='Email'
										/>
										<Input
											Id='Phone'
											Label='Phone'
											Placeholder='Phone'
											Default={user.Phone}
											Icon='Phone'
										/>
										<button onClick={(e) => UpdateInfo(e)}>
											Update Profile
										</button>
									</>
								) : (
									<>
										<h1>{user.displayName}</h1>
										<Input
											Id='Email'
											Default={user.Email}
											Icon='Email'
											ReadOnly={true}
										/>
										<Input
											Id='Phone'
											Default={user.Phone}
											Icon='Phone'
											ReadOnly={true}
										/>
									</>
								)}
							</form>
							<hr />
							<menu>
								<h3>Actions Menu</h3>
								<li
									onClick={() => {
										setEditProfile(!editProfile)
									}}
								>
									{editProfile ? 'View Profile' : 'Edit Profile'}
								</li>
								<li>Reset Password</li>
								<li
									onClick={(e) => {
										LogOut(e)
									}}
								>
									Log Out
								</li>
							</menu>
						</>
					)}
				</aside>
				{user && (
					<main>
						<div id='Company'>
							<h1>Site Administrator</h1>
						</div>
						<div className={styles.Forms}>
							<button
								className={selected === 'Clients' ? styles.selected : ''}
								onClick={() => setSelected('Clients')}
							>
								<GrOrganization />
								{Clients === 1 ? Clients + ` Client` : Clients + ` Clients`}
							</button>
							<button
								className={selected === 'Users' ? styles.selected : ''}
								onClick={() => setSelected('Users')}
							>
								<FaUsers />
								{Users} Users
							</button>
							{user.isAdmin && (
								<button
									className={selected === 'My-Work' ? styles.selected : ''}
									onClick={() => setSelected('My-Work')}
								>
									<FaCode />
									{Work === 1 ? Work + ` Project` : Work + ` Projects`}
								</button>
							)}
							<button
								className={selected === 'Communications' ? styles.selected : ''}
								onClick={() => setSelected('Communications')}
							>
								<GoCommentDiscussion />
								{Communications === 1
									? Communications + ` Communication`
									: Communications + ` Communications`}
							</button>
							<button
								className={selected === 'Invoices' ? styles.selected : ''}
								onClick={() => setSelected('Invoices')}
							>
								<FaFileInvoiceDollar />
								{Invoices === 1
									? Invoices + ` Invoice`
									: Invoices + ` Invoices`}
							</button>
						</div>
						<div className={styles.Menu}>
							<button onClick={() => setShowForm(true)}>
								<IoMdAddCircle />
								New
							</button>
							<ViewSelector Collection={selected} />
						</div>
						<Table Collection={selected} />
						{showForm && (
							<FormSelector
								Collection={selected}
								CloseForm={() => setShowForm(false)}
							/>
						)}
					</main>
				)}
			</div>
		</div>
	)
}
