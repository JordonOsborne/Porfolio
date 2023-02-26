import Link from 'next/link'
import AuthContext from '../Context/AuthContext'
import { auth } from '../firebase.config'
import { MdAccountCircle } from 'react-icons/md'
import { useState, useContext } from 'react'

function UserMenu({ user }) {
	const { ResetPassword } = useContext(AuthContext)
	const [showMenu, setShowMenu] = useState(false)
	const LogOut = async () => {
		await auth.signOut()
	}
	return (
		<div
			id='UserMenu'
			onClick={() => {
				setShowMenu(!showMenu)
			}}
		>
			{user?.PhotoURL !== null ? (
				<img
					src={user.PhotoURL}
					alt={user.displayName}
					title={user.displayName}
					width='40px'
					height='40px'
					className='ProfileImg'
				/>
			) : (
				<MdAccountCircle title={user.displayName} />
			)}
			{showMenu && (
				<menu>
					<li className='heading'>{user.displayName}</li>
					<li>
						<Link href='/Admin'>Admin Page</Link>
					</li>
					<li onClick={() => ResetPassword()}>Reset Password</li>
					<li
						onClick={() => LogOut()}
						className='divider'
					>
						Logout
					</li>
				</menu>
			)}
		</div>
	)
}

export default UserMenu
