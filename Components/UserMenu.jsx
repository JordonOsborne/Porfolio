import UserPanel from './UserPanel'
import { MdAccountCircle } from 'react-icons/md'
import Image from 'next/image'
import { useState } from 'react'

function UserMenu({ user }) {
	const [isOpen, setIsOpen] = useState(false)
	const OpenMenu = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<div
				id='UserMenu'
				onClick={() => OpenMenu()}
			>
				{user?.PhotoURL ? (
					<Image
						src={user.PhotoURL}
						alt={user.displayName}
						title={user.displayName}
						width='30px'
						height='30px'
						className='ProfileImg'
					/>
				) : (
					<MdAccountCircle />
				)}
			</div>
			<UserPanel
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</>
	)
}

export default UserMenu
