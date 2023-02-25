import Link from 'next/link'
import { auth } from '../firebase.config'
import { MdAccountCircle } from 'react-icons/md'
import { useState } from 'react'

function UserMenu({ user }) {
	const [showMenu, setShowMenu] = useState(false)
	const LogOut = async (e) => {
		e.preventDefault()
		await auth.signOut()
	}
	return (
		<div
			id='UserMenu'
			onClick={() => {
				setShowMenu(!showMenu)
			}}
		>
			{!user?.photoURL ? (
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
					<li>Reset Password</li>
					<li
						onClick={(e) => {
							LogOut(e)
						}}
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
