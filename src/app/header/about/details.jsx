import { Section, Header, Separator } from 'react-aria-components'
import LinkIcon from '../linkIcon'
import ExperienceMeter from '../../experienceMeter/layout'

export default function details() {
	const experience = [
		{
			id: 1,
			name: 'SharePoint',
			icon: 'sharePoint',
			years: 9,
			startDate: Date.parse('03/01/2014'),
		},
		{
			id: 2,
			name: 'Power Apps',
			icon: 'powerApps',
			years: 7,
			startDate: Date.parse('06/01/2016'),
		},
		{
			id: 3,
			name: 'Web Development',
			icon: 'webDevelopment',
			years: 7,
			startDate: Date.parse('01/01/2016'),
		},
		{
			id: 4,
			name: 'Power Automate',
			icon: 'powerAutomate',
			years: 5,
			startDate: Date.parse('01/01/2018'),
		},
		{
			id: 5,
			name: 'Next.js',
			icon: 'nextJS',
			years: 1,
			startDate: Date.parse('01/01/2023'),
		},
	]
	return (
		<>
			<Section>
				<Header className='px-4 pb-2'>Experience</Header>
				{experience.map((item) => {
					return <ExperienceMeter key={item.id} tech={item} />
				})}
			</Section>
			<Separator className='mt-2' />
			<Section className='links'>
				<LinkIcon href='/Resume' label='Resume' icon='resume' />
				<LinkIcon href='/Resume.pdf' label='Resume PDF' icon='pdf' />
				<LinkIcon
					href='https://www.linkedin.com/in/jordon-osborne/'
					target='_blank'
					label='LinkedIn'
					icon='linkedIn'
				/>
			</Section>
		</>
	)
}
