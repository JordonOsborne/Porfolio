import Header from '../Components/Header'
import Loading from '../Components/Reusable/Loading'
import Input from '../Components/Reusable/Input'
import Upload from '../Components/Reusable/Upload'
import FormSwitch from '../Components/Forms/_FormSwitch'
import TableSwitch from '../Components/Tables/_TableSwitch'
import styles from '../styles/Admin.module.scss'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase.config'
import { useRouter } from 'next/router'
import { FaUsers, FaFileInvoiceDollar, FaCode } from 'react-icons/fa'
import { GrOrganization } from 'react-icons/gr'
import { GoCommentDiscussion } from 'react-icons/go'

export default function Admin() {
	const { user, UpdateProfile, ResetPassword } = useContext(AuthContext)
	const router = useRouter()
	const [editProfile, setEditProfile] = useState(false)
	const { table, setTable, collectionTotals, showForm, isLoading } =
		useContext(FirebaseAPI)

	useEffect(() => {
		if (user?.isAdmin) {
			setTable('Clients')
		}
	}, [user])

	const LogOut = async () => {
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
								{editProfile ? (
									<>
										<Upload
											Id='PhotoURL'
											Label='Profile'
											Types={['image/png, image/jpeg, image/svg']}
											filePath={`Users/${user.uid}.jpg`}
											Source={user?.PhotoURL}
										/>
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
										<img
											src={
												user?.PhotoURL === undefined
													? 'NotFound'
													: user.PhotoURL
											}
											title={user?.displayName}
											width='250px'
											height='250px'
										/>
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
								<li onClick={() => ResetPassword()}>Reset Password</li>
								<li onClick={() => LogOut()}>Log Out</li>
							</menu>
						</>
					)}
				</aside>
				{user && (
					<main>
						<div id='Company'>
							<h1>
								{user.isAdmin ? 'Site Administrator' : 'Client Information'}
							</h1>
						</div>
						<div className={styles.Forms}>
							{user.isAdmin && (
								<button
									className={table === 'Clients' ? styles.selected : ''}
									onClick={() => setTable('Clients')}
								>
									<GrOrganization />
									{collectionTotals.Clients === 1
										? collectionTotals.Clients + ` Client`
										: collectionTotals.Clients + ` Clients`}
								</button>
							)}
							<button
								className={table === 'Users' ? styles.selected : ''}
								onClick={() => setTable('Users')}
							>
								<FaUsers />
								{collectionTotals.Users} Users
							</button>
							{user.isAdmin && (
								<button
									className={table === 'My-Work' ? styles.selected : ''}
									onClick={() => setTable('My-Work')}
								>
									<FaCode />
									{collectionTotals.Work === 1
										? collectionTotals.Work + ` Project`
										: collectionTotals.Work + ` Projects`}
								</button>
							)}
							<button
								className={table === 'Communications' ? styles.selected : ''}
								onClick={() => setTable('Communications')}
							>
								<GoCommentDiscussion />
								{collectionTotals.Communications === 1
									? collectionTotals.Communications + ` Communication`
									: collectionTotals.Communications + ` Communications`}
							</button>
							<button
								className={table === 'Invoices' ? styles.selected : ''}
								onClick={() => setTable('Invoices')}
							>
								<FaFileInvoiceDollar />
								{collectionTotals.Invoices === 1
									? collectionTotals.Invoices + ` Invoice`
									: collectionTotals.Invoices + ` Invoices`}
							</button>
						</div>
						{isLoading ? <Loading /> : <TableSwitch />}
						{showForm && <FormSwitch />}
					</main>
				)}
			</div>
		</div>
	)
}
