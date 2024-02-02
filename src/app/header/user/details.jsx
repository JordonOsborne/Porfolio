import { Section, Header, Separator } from 'react-aria-components'
import AuthContext from '../../../lib/auth'
import LinkIcon from '../linkIcon'
import Icon from '../../Icons/icon'
import { useContext } from 'react'

export default function details() {
	const { user, setUser, SwitchTheme, LogOut } = useContext(AuthContext)
	if (user && !user?.Theme) {
		setUser({ ...user, Theme: 'Dark' })
	}

	if (user) {
		return (
			<>
				<Section>
					<Header className='pl-8 h-auto gap-1 flex-col items-start col-span-3 justify-self-start'>
						<h4 className='text-base'>{user.Name}</h4>
						<span className='flex gap-2 text-sm italic dark:text-neutral-600 text-neutral-900'>
							<Icon name='phone' size='sm' />
							{user.Phone}
						</span>
						<span className='flex gap-2 text-sm italic dark:text-neutral-600 text-neutral-900'>
							<Icon name='email' size='sm' />
							{user.Email}
						</span>
					</Header>
				</Section>
				<Separator className='mt-2' />
				<Section className='links'>
					<LinkIcon label='Update Info' icon='profile' />
					<LinkIcon label='Change Password' icon='password' />
					<LinkIcon
						action={SwitchTheme}
						label={`Theme (${user?.Theme})`}
						icon='theme'
					/>
				</Section>
				<Section className='px-6 py-2 text-base'>
					<Header className='flex gap-2 justify-start' onClick={() => LogOut()}>
						<Icon name='logout' />
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
