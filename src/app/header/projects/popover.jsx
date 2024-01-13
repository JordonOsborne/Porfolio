import {
	Popover,
	Menu,
	MenuItem,
	Label,
	Section,
	Header,
	Separator,
} from 'react-aria-components'
import Icon from '../../Icons/icon'
import LinkIcon from '../linkIcon'
import Rating from '../../Ratings/avgRating'
import Image from 'next/image'

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
					<p className='subtitle pt-1'>Tech Stack: </p>
					<p className='subtitle pt-1'>Date Completed: </p>
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
								icon={item.icon}
								size='sm'
								label={item.name}
							/>
						)
					})}
				</Section>
				<Separator className='mt-2' />
				<Section>
					<MenuItem href='/Projects' className='group p-2 gap-4'>
						<div className='flex flex-col items-center gap-2'>
							<Icon name='projects' />
							<Label className='text-neutral-900 dark:text-neutral-600 group-hover:text-primary-800 dark:group-hover:text-primary-700'>
								## Projects
							</Label>
						</div>
						<div>
							<Header className='text-base not-italic font-semibold pb-2'>
								Full Porfolio
							</Header>
							<Rating size='sm' rating={3} reviewCount={3} commentCount={2} />
						</div>
					</MenuItem>
				</Section>
			</Menu>
		</Popover>
	)
}
