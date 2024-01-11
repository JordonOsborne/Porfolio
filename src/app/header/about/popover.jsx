import {
	Popover,
	Menu,
	Section,
	Header,
	Link,
	Separator,
} from 'react-aria-components'
import LinkIcon from '../linkIcon'
import ExperienceMeter from '../../experienceMeter/layout'
import Image from 'next/image'

export default function aboutPopover({ experience }) {
	return (
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
					<p className='subtitle pt-1'>SharePoint/Power Apps Developer</p>
					<p className='subtitle pt-1'>Eastman Chemical Company</p>
				</Link>
			</div>
			<Menu>
				<Section className='pl-2'>
					<Header className='pb-2'>Experience</Header>
					{experience.map((item) => {
						return <ExperienceMeter key={item.id} tech={item} />
					})}
				</Section>
				<Separator className='mt-2' />
				<Section className='links'>
					<LinkIcon href='/About' label='Online Resume' icon='resume' />
					<LinkIcon href='/About' label='Resume PDF' icon='pdf' />
					<LinkIcon
						href='https://www.linkedin.com/in/jordon-osborne/'
						label='LinkedIn'
						icon='linkedIn'
						target='_blank'
					/>
				</Section>
			</Menu>
		</Popover>
	)
}
