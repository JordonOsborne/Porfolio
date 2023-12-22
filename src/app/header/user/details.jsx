import { Section, Header, Separator } from 'react-aria-components';
import LinkIcon from '../linkIcon';
import Icon from '../../icons/layout';

export default function details({ user, setUser }) {
	const switchTheme = () => {
		if (user.theme == 'Dark') {
			setUser({ ...user, theme: 'Light' });
		} else {
			setUser({ ...user, theme: 'Dark' });
		}
	};
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
					action={switchTheme}
					label={`Theme (${user.theme})`}
					icon='theme'
				/>
			</Section>
		</>
	);
}
