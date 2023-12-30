import {
	Popover,
	Menu,
	Section,
	Link,
	Header,
	Separator,
} from 'react-aria-components'
import LinkIcon from '../linkIcon'
import Icon from '../../Icons/icon'
import Image from 'next/image'
import CompanyInfo from '../companyInfo'

export default function contactPopover() {
	return (
		<Popover className='menu' id='Contact'>
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
				<Link href='/Contact'>
					<h6>Jordon Osborne</h6>
					<Link className='subtitle flex gap-2 pt-1'>
						<Icon icon='phone' size='small' />
						<span>(423) 276-1041</span>
					</Link>
					<Link className='subtitle flex gap-2 pt-1'>
						<Icon icon='email' size='small' />
						<span>JordonOsborne@outlook.com</span>
					</Link>
				</Link>
			</div>
			<Menu>
				<Section className='links'>
					<Header className='col-span-3 justify-self-start'>
						Company Dashboard
					</Header>
					<CompanyInfo />
					<LinkIcon icon='dashboard' label='My Company Dashboard' />
					<LinkIcon icon='communications' label='My Communications w/ Jordon' />
					<LinkIcon icon='invoice' label='My Company Invoices' />
				</Section>
				<Separator className='mt-2' />
				<Section className='links'>
					<LinkIcon href='/Quote' label='Online Quotes' icon='quote' />
					<LinkIcon
						href='/Qualifications'
						label='Skills Check'
						icon='checklist'
					/>
					<LinkIcon href='Reviews' label='Leave Review' icon='Reviews' />
				</Section>
			</Menu>
		</Popover>
	)
}
