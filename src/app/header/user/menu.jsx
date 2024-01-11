import { MenuTrigger, Link, Button } from 'react-aria-components'
import { usePathname } from 'next/navigation'
import AuthContext from '../../../../context/auth'
import UserPopover from './popover'
import Icon from '../../Icons/icon'
import Image from 'next/image'
import { useContext } from 'react'

export default function userMenu() {
	const path = usePathname()
	const { user } = useContext(AuthContext)

	if (path == '/Login') {
		return
	}
	if (!user) {
		return (
			<MenuTrigger>
				<Link
					href='/Login'
					className='border-l-2 pl-2 flex gap-1 items-center text-xs font-light'
				>
					<Icon name='login' size={30} />
					Login
				</Link>
			</MenuTrigger>
		)
	} else {
		return (
			<MenuTrigger>
				<Button
					aria-label='User Menu'
					role='tab'
					className='focus-visible:outline-none'
				>
					<Image
						src={user?.imageUrl ? user?.imageUrl : '/img/Avatar.png'}
						alt={user?.name}
						className='rounded-full'
						width='30'
						height='30'
					/>
				</Button>
				<UserPopover />
			</MenuTrigger>
		)
	}
}
