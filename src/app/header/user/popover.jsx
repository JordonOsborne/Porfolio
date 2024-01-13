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
import AuthContext from '../../../../context/auth'
import { useContext } from 'react'

export default function projectPopover() {
	const { user, SwitchTheme, LogOut } = useContext(AuthContext)

	return (
		<Popover className='menu'>
			<Link href='/User' className='visual'>
				<div className='container'>
					<Image
						src={user?.imageUrl ? user?.imageUrl : '/img/Avatar.png'}
						alt={user?.name}
						className='p-1 rounded-full'
						width='175'
						height='175'
					/>
				</div>
				<div>
					<h6>{user.name}</h6>
					<div className='subtitle flex gap-2 pt-1'>
						<Icon name='phone' size='sm' />
						<span>{user?.phone}</span>
					</div>
					<div className='subtitle flex gap-2 pt-1'>
						<Icon name='email' size='sm' />
						<span>{user?.email}</span>
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
						label={`Theme Preference (${user.theme})`}
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
