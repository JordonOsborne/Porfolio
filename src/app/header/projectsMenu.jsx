import {
	MenuTrigger,
	Button,
	Popover,
	Menu,
	Section,
	Header,
	Separator,
	MenuItem,
	Label,
} from 'react-aria-components';
import LinkIcon from './linkIcon';
import Image from 'next/image';
import Rating from '../rating/layout';

export default function projectsMenu() {
	const projects = [
		{ id: 1, icon: 'SharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'Power Apps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'Web Development', name: 'Web Development', years: 7 },
	];
	const technology = [
		{ id: 1, icon: 'SharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'Power Apps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'HTML', name: 'HTML', years: 7 },
		{ id: 3, icon: 'CSS', name: 'CSS', years: 7 },
		{ id: 3, icon: 'JavaScript', name: 'JavaScript', years: 7 },
		{ id: 3, icon: 'Firebase', name: 'Firebase', years: 7 },
		{ id: 3, icon: 'Next', name: 'Next JS', years: 7 },
		{ id: 3, icon: 'Power BI', name: 'Power BI', years: 7 },
		{ id: 3, icon: 'Power Automate', name: 'Power Automate', years: 7 },
		{ id: 3, icon: 'SQL', name: 'SQL', years: 7 },
		{ id: 3, icon: 'WIX', name: 'WIX', years: 7 },
		{ id: 3, icon: 'Tailwind', name: 'Tailwind', years: 7 },
	];

	return (
		<MenuTrigger>
			<Button aria-label='Projects Menu' role='tab'>
				Projects
			</Button>
			<Popover className='menu'>
				<div className='visual'>
					<div className='container'>
						<Image
							src='/img/MockUp.png'
							alt='Project Image'
							width='300'
							height='225'
						/>
					</div>
					<div>
						<h6>JOsborne.dev Porfolio</h6>
						<p className='subtitle'>Tech Stack: </p>
						<p className='subtitle'>Date Completed: </p>
					</div>
				</div>
				<Menu>
					<Section className='pl-2 grid grid-cols-2 gap-2'>
						<Header className='pb-2 col-span-2'>
							Select technology to filter projects
						</Header>
						{technology.map((item) => {
							return (
								<LinkIcon
									key={item.id}
									icon={item.name}
									size='small'
									label={item.name}
								/>
							);
						})}
					</Section>
					<Separator className='mt-2' />
					<Section>
						<MenuItem href='/Projects' className='p-2 gap-4'>
							<div className='flex flex-col items-center gap-2'>
								<Image
									src='/img/MockUp.png'
									alt='Project Icon'
									width='40'
									height='40'
								/>
								<Label className='text-neutral-600'>## Projects</Label>
							</div>
							<div>
								<Header className='text-base not-italic font-semibold pb-2'>
									Full Porfolio
								</Header>
								<Rating
									size='small'
									rating={3}
									reviewCount={3}
									commentCount={2}
								/>
							</div>
						</MenuItem>
					</Section>
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}
