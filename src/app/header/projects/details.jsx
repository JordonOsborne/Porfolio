import {
	MenuItem,
	Section,
	Header,
	Separator,
	Link,
} from 'react-aria-components'
import { useRouter } from 'next/navigation'
import LinkIcon from '../linkIcon'
import Icon from '../../Icons/icon'

export default function details() {
	const router = useRouter()
	const technology = [
		{ id: 1, icon: 'sharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'powerApps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'html', name: 'HTML', years: 7 },
		{ id: 4, icon: 'css', name: 'CSS', years: 7 },
		{ id: 5, icon: 'javaScript', name: 'JavaScript', years: 7 },
		{ id: 6, icon: 'firebase', name: 'Firebase', years: 7 },
		{ id: 7, icon: 'nextJS', name: 'Next JS', years: 7 },
		{ id: 8, icon: 'powerBI', name: 'Power BI', years: 7 },
		{ id: 9, icon: 'powerAutomate', name: 'Power Automate', years: 7 },
		{ id: 10, icon: 'sql', name: 'SQL', years: 7 },
		{ id: 11, icon: 'wix', name: 'WIX', years: 7 },
		{ id: 12, icon: 'tailwind', name: 'Tailwind', years: 7 },
	]
	const projects = []

	const FilterProjects = (tech) => {
		router.push('/Projects?tech=' + tech)
	}
	return (
		<>
			<Section className='pb-2 grid grid-cols-2 projects'>
				<Header className='text-center justify-self-center text-xs font-light italic col-span-2 h-auto py-2'>
					Select technology to filter projects
				</Header>
				{technology.map((item) => {
					return (
						<LinkIcon
							key={item.id}
							action={() => FilterProjects(item.name)}
							icon={item.icon}
							size='sm'
							label={item.name}
						/>
					)
				})}
			</Section>
			<Separator className='mt-2' />
			<Section className='border-b-[1px]'>
				<MenuItem className='porfolio gap-2'>
					<Link href='/Projects' className='flex justify-center items-center'>
						<Icon name='projects' />
						<Header className='text-base not-italic font-semibold flex-col'>
							<span>Full Porfolio</span>
							<span>{`${projects.length} Projects`}</span>
						</Header>
					</Link>
				</MenuItem>
			</Section>
		</>
	)
}
