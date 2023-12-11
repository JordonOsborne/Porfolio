import {
	MenuTrigger,
	Button,
	Popover,
	Menu,
	Section,
	Header,
	Link,
	Separator,
} from 'react-aria-components';
import LinkIcon from './linkIcon';
import ExperienceMeter from '../experienceMeter/layout';
import Image from 'next/image';

export default function aboutMenu() {
	const experience = [
		{
			id: 1,
			name: 'SharePoint',
			years: 9,
			startDate: Date.parse('03/01/2014'),
		},
		{
			id: 2,
			name: 'Power Apps',
			years: 7,
			startDate: Date.parse('06/01/2016'),
		},
		{
			id: 3,
			name: 'Web Development',
			years: 7,
			startDate: Date.parse('01/01/2016'),
		},
		{
			id: 4,
			name: 'Power Automate',
			years: 5,
			startDate: Date.parse('01/01/2018'),
		},
		{
			id: 5,
			name: 'Next.js',
			years: 1,
			startDate: Date.parse('01/01/2023'),
		},
	];

	return (
		<MenuTrigger>
			<Button aria-label='About Menu' role='tab'>
				About
			</Button>
			<Popover className='menu'>
				<div className='visual'>
					<div className='container max-w-[300px]'>
						<Image
							src='/img/Profile.png'
							alt='Profile Image'
							width='175'
							height='175'
							className='rounded-full'
						/>
					</div>
					<Link href='/about'>
						<h6>Jordon Osborne</h6>
						<p className='subtitle'>SharePoint/Power Apps Developer</p>
						<p className='subtitle'>Eastman Chemical Company</p>
					</Link>
				</div>
				<Menu>
					<Section className='pl-2'>
						<Header className='pb-2'>Experience</Header>
						{experience.map((item) => {
							return <ExperienceMeter key={item.id} tech={item} />;
						})}
					</Section>
					<Separator className='mt-2' />
					<Section className='links'>
						<LinkIcon href='/About' label='Online Resume' icon='Resume' />
						<LinkIcon href='/About' label='Resume PDF' icon='PDF' />
						<LinkIcon
							href='https://www.linkedin.com/in/jordon-osborne/'
							label='LinkedIn'
							icon='LinkedIn'
							target='_blank'
						/>
					</Section>
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}
