import styles from '../styles/Panel.module.scss'
import Input from './Reusable/Input'
import Upload from './Reusable/Upload'
import AuthContext from '../Context/AuthContext'
import FirebaseAPI from '../Context/FirebaseAPI'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import { MdOutlineExitToApp } from 'react-icons/md'
import { auth } from '../firebase.config'
import { useState, useContext, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

function UserPanel({ isOpen, setIsOpen }) {
	const { user, UpdateProfile, UpdatePassword, ReAuthenticateWithPassword } =
		useContext(AuthContext)
	const { formUpdates } = useContext(FirebaseAPI)
	const router = useRouter()
	const [editProfile, setEditProfile] = useState(false)
	const [changePassword, setChangePassword] = useState(false)
	const [authenticate, setAuthenticate] = useState(false)
	const modal = useRef(null)

	useEffect(() => {
		isOpen ? modal.current?.showModal() : modal.current?.close()
	}, [isOpen])

	// CLOSE DIALOG IF SELECTED OUTSIDE OF THE PANEL
	useEffect(() => {
		modal.current?.addEventListener('click', (e) => {
			const dialogDimensions = modal.current.getBoundingClientRect()
			if (
				e.clientX < dialogDimensions.left ||
				e.clientX > dialogDimensions.right ||
				e.clientY < dialogDimensions.top ||
				e.clientY > dialogDimensions.bottom
			) {
				CloseMenu()
			}
		})
	}, [])

	const CloseMenu = () => {
		setIsOpen(false)
		modal.current.close()
	}

	const LogOut = async () => {
		await auth.signOut()
		setIsOpen(false)
		router.push('/')
	}

	const UpdateInfo = async (e) => {
		e.preventDefault()
		setChangePassword(false)
		await UpdateProfile(user, FirstName, LastName, Phone, Email)
		auth.currentUser.getIdToken(true)
		setEditProfile(false)
	}

	const ChangePassword = async (e) => {
		e.preventDefault()
		setEditProfile(false)
		const { NewPassword, ConfirmPassword } = formUpdates
		if (NewPassword === ConfirmPassword) {
			const response = await UpdatePassword(NewPassword)
			response.isUpdated && setChangePassword(false)
			auth.currentUser.getIdToken(true)
			if (!response.isUpdated && response.Reason == 'Re-Authentication') {
				setChangePassword(false)
				setAuthenticate(true)
			}
		} else {
			console.log('Error: Password does not match')
		}
	}

	const ReAuthenticate = async (e) => {
		e.preventDefault()
		const { Password } = formUpdates
		const authenticated = await ReAuthenticateWithPassword(Password)
		if (authenticated) {
			auth.currentUser.getIdToken(true)
			setAuthenticate(false)
			setChangePassword(true)
		}
	}

	return (
		<dialog
			data-modal
			className={styles.SidePanel}
			id={styles.UserPanel}
			ref={modal}
		>
			<ToastContainer />
			<div className={styles.container}>
				<div className={styles.ActionMenu}>
					<MdOutlineExitToApp
						onClick={() => CloseMenu()}
						title='Close Form'
						className={styles.Close}
					/>
				</div>
				<form>
					{editProfile ? (
						<div className={styles.container}>
							<Upload
								Id='PhotoURL'
								Label='Profile'
								Types={['image/png, image/jpeg, image/svg']}
								filePath={`Users/${user.uid}.jpg`}
								Source={user?.PhotoURL}
							/>
							<Input
								Id='FirstName'
								Label='First'
								Placeholder='First Name'
								Default={user?.FirstName}
								Icon='Person'
							/>
							<Input
								Id='LastName'
								Label='Last'
								Placeholder='Last Name'
								Default={user?.LastName}
								Icon='Person'
							/>
							<Input
								Id='Email'
								Label='Email'
								Placeholder='Email'
								Default={user?.Email}
								Icon='Email'
							/>
							<Input
								Id='Phone'
								Label='Phone'
								Placeholder='Phone'
								Default={user?.Phone}
								Icon='Phone'
							/>
							<div className={styles.Options}>
								<button onClick={() => setEditProfile(false)}>Cancel</button>
								<button onClick={(e) => UpdateInfo(e)}>Update</button>
							</div>
						</div>
					) : (
						<>
							<Image
								src={user?.PhotoURL ? user?.PhotoURL : user?.Company?.Logo}
								title={user?.displayName}
								width='250px'
								height='250px'
							/>
							<h1>{user?.displayName}</h1>
							<Input
								Id='Email'
								Default={user?.Email}
								Icon='Email'
								ReadOnly={true}
								Visible={true}
							/>
							<Input
								Id='Phone'
								Default={user?.Phone}
								Icon='Phone'
								ReadOnly={true}
								Visible={true}
							/>
						</>
					)}
				</form>
				{authenticate && (
					<form className={styles.container}>
						<Input
							Id='Password'
							Label='Password'
							Placeholder='Password'
							Default={null}
							Icon='Password'
						/>
						<div className={styles.Options}>
							<button onClick={() => setAuthenticate(false)}>Cancel</button>
							<button onClick={(e) => ReAuthenticate(e)}>Confirm</button>
						</div>
					</form>
				)}
				{changePassword && (
					<form
						id={styles.PasswordChange}
						className={styles.container}
					>
						<Input
							Id='NewPassword'
							Label='New Password'
							Placeholder='New Password'
							Default={null}
							Icon='Password'
						/>
						<Input
							Id='ConfirmPassword'
							Label='Confirm New Password'
							Placeholder='Confirm New Password'
							Default={null}
							Icon='Password'
						/>
						<div className={styles.Options}>
							<button onClick={() => setChangePassword(false)}>Cancel</button>
							<button onClick={(e) => ChangePassword(e)}>Update</button>
						</div>
					</form>
				)}
				<hr />
				{user && (
					<menu>
						<h3>Actions Menu</h3>
						<li>
							{user?.isAdmin ? (
								<Link href='/Admin'>Admin Portal</Link>
							) : (
								<Link href={`/ClientPortal/${user?.Company?.id}`}>
									Client Portal
								</Link>
							)}
						</li>
						{!editProfile && (
							<li
								onClick={() => {
									setChangePassword(false)
									setEditProfile(!editProfile)
								}}
							>
								Edit Profile
							</li>
						)}
						{!changePassword && (
							<li
								onClick={() => {
									setEditProfile(false)
									setChangePassword(!changePassword)
								}}
							>
								Change Password
							</li>
						)}
						<li onClick={() => LogOut()}>Log Out</li>
					</menu>
				)}
			</div>
		</dialog>
	)
}

export default UserPanel
