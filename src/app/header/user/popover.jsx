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
	const { user, SwitchTheme } = useContext(AuthContext)

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
						<Icon icon='phone' size='small' />
						<span>{user?.phone}</span>
					</div>
					<div className='subtitle flex gap-2 pt-1'>
						<Icon icon='email' size='small' />
						<span>{user?.email}</span>
					</div>
				</div>
			</Link>
			<Menu>
				<Section className='pl-2 grid grid-cols-2 gap-2'>
					<Header className='col-span-2'>User Information</Header>
					<CompanyInfo />
					<LinkIcon icon='edit profile' label='Edit Profile' />
					<LinkIcon icon='change password' label='Change Password' />
					<LinkIcon
						action={SwitchTheme}
						label={`Theme Preference (${user.theme})`}
						icon='theme'
					/>
				</Section>
				<Separator className='mt-2' />
				<Section className='pl-2 grid grid-cols-3 gap-2'>
					<LinkIcon icon='quotes' label='Requested Quotes' />
					<LinkIcon icon='skill check' label='Skills Check' />
					<LinkIcon icon='reviews' label='My Reviews' />
				</Section>
			</Menu>
		</Popover>
	)
}
