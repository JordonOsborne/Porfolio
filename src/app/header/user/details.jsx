import { Section, Header, Separator } from 'react-aria-components'
import AuthContext from '../../../../context/auth'
import LinkIcon from '../linkIcon'
import Icon from '../../Icons/icon'
import { useContext } from 'react'

export default function details() {
	const { user, setUser, SwitchTheme, LogOut } = useContext(AuthContext)
	if (user && !user?.theme) {
		setUser({ ...user, theme: 'Dark' })
	}

	if (user) {
		return (
			<>
				<Section>
					<Header className='pl-8 h-auto gap-1 flex-col items-start col-span-3 justify-self-start'>
						<h4 className='text-base'>{user.name}</h4>
						<span className='flex gap-2 text-sm italic dark:text-neutral-600 text-neutral-900'>
							<Icon icon='phone' size='small' />
							{user.phone}
						</span>
						<span className='flex gap-2 text-sm italic dark:text-neutral-600 text-neutral-900'>
							<Icon icon='email' size='small' />
							{user.email}
						</span>
					</Header>
				</Section>
				<Separator className='mt-2' />
				<Section className='links'>
					<LinkIcon label='Update Info' icon='user info' />
					<LinkIcon label='Change Password' icon='update password' />
					<LinkIcon
						action={SwitchTheme}
						label={`Theme (${user?.theme})`}
						icon='theme'
					/>
				</Section>
				<Section className='px-6 py-2 text-base'>
					<Header className='flex gap-2 justify-start' onClick={() => LogOut()}>
						<Icon icon='log out' />
						<span>Log Out</span>
					</Header>
				</Section>
			</>
		)
	} else {
		return (
			<Section className='links pb-2'>
				<LinkIcon label='Google' icon='google' />
				<LinkIcon label='Windows' icon='windows' />
				<LinkIcon label='Apple' icon='apple' />
			</Section>
		)
	}
}
