import {
	Popover,
	Menu,
	MenuItem,
	Label,
	Section,
	Header,
	Separator,
} from 'react-aria-components';
import LinkIcon from '../linkIcon';
import Rating from '../../rating/layout';
import Image from 'next/image';

export default function projectPopover({ projects, technology }) {
	return (
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
	);
}
