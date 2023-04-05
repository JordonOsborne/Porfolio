import Input from '../../Components/Reusable/Input'
import Upload from '../../Components/Reusable/Upload'
import Loading from '../../Components/Reusable/Loading'
import AuthContext from '../../Context/AuthContext'
import { auth } from '../../firebase.config'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
function UserPanel() {
	const { user, UpdateProfile, ResetPassword } = useContext(AuthContext)
	const router = useRouter()
	const [editProfile, setEditProfile] = useState(false)

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
		<aside>
			{!user ? (
				<Loading />
			) : (
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
									Default={user?.FirstName}
									Icon='Person'
								/>
								<Input
									Id='LastName'
									Label='Last Name'
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
								<button onClick={(e) => UpdateInfo(e)}>Update Profile</button>
							</>
						) : (
							<>
								<img
									src={
										user?.PhotoURL === undefined ? 'NotFound' : user.PhotoURL
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
									Visible={true}
								/>
								<Input
									Id='Phone'
									Default={user.Phone}
									Icon='Phone'
									ReadOnly={true}
									Visible={true}
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
						<li
							onClick={() =>
								user?.isAdmin
									? router.push('/Clients')
									: router.push(`/ClientPortal/${user?.Company?.id}`)
							}
						>
							Client Portal
						</li>
						<li onClick={() => ResetPassword()}>Reset Password</li>
						<li onClick={() => LogOut()}>Log Out</li>
					</menu>
				</>
			)}
		</aside>
	)
}

export default UserPanel
