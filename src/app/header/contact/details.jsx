import { Section, Separator, Header } from 'react-aria-components'
import LinkIcon from '../linkIcon'
import Icon from '../../Icons/icon'

export default function details() {
	return (
		<>
			<Section>
				<Header className='pl-8 h-auto gap-1 flex-col items-start col-span-3 justify-self-start'>
					<h4 className='text-base'>Jordon Osborne</h4>
					<span className='flex gap-2 text-sm italic dark:text-neutral-600 text-neutral-900'>
						<Icon icon='phone' size='small' />
						(423) 276-1041
					</span>
					<span className='flex gap-2 text-sm italic dark:text-neutral-600 text-neutral-900'>
						<Icon icon='email' size='small' />
						JordonOsborne.outlook.com
					</span>
				</Header>
			</Section>
			<Separator className='mt-2' />
			<Section className='links'>
				<LinkIcon href='/Quote' label='Quotes' icon='quote' />
				<LinkIcon
					href='/Qualifications'
					label='Skills Check'
					icon='skillCheck'
				/>
				<LinkIcon href='Reviews' label='Reviews' icon='reviews' />
			</Section>
		</>
	)
}
