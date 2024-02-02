import {
	Popover,
	Menu,
	Section,
	Header,
	Separator,
	Link,
} from 'react-aria-components'
import LinkIcon from '../linkIcon'
import Icon from '../../Icons/icon'
import Image from 'next/image'
import CompanyInfo from '../companyInfo'
import AuthContext from '../../../lib/auth'
import { useContext } from 'react'

export default function projectPopover() {
	const { user, SwitchTheme, LogOut } = useContext(AuthContext)

	return (
		<Popover className='menu'>
			<Link href='/Users/Me' className='visual'>
				<div className='container'>
					<Image
						src={user?.PhotoURL ? user?.PhotoURL : '/img/Avatar.png'}
						alt={user?.Name}
						className='p-1 rounded-full w-44 h-44'
						width='175'
						height='175'
					/>
				</div>
				<div>
					<h6>{user.Name}</h6>
					<div className='subtitle flex gap-2 pt-1'>
						<Icon name='phone' size='sm' />
						<span>{user?.Phone}</span>
					</div>
					<div className='subtitle flex gap-2 pt-1'>
						<Icon name='email' size='sm' />
						<span>{user?.Email}</span>
					</div>
				</div>
			</Link>
			<Menu className='flex flex-col justify-between'>
				<Section className='pl-2 grid grid-cols-3 gap-2'>
					<Header className='col-span-3'>User Information</Header>
					<CompanyInfo />
					<LinkIcon icon='password' label='Change Password' />
					<LinkIcon
						action={SwitchTheme}
						label={`Theme Preference (${user.Theme})`}
						icon='theme'
					/>
					<LinkIcon action={LogOut} label='Logout' icon='logout' />
				</Section>
				<Separator className='mt-2' />
				<Section className='pl-2 grid grid-cols-3 gap-2'>
					<LinkIcon icon='quote' label='Requested Quotes' />
					<LinkIcon icon='skillCheck' label='Skills Check' />
					<LinkIcon icon='reviews' label='My Reviews' />
				</Section>
			</Menu>
		</Popover>
	)
}
