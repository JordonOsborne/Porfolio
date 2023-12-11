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
import Icon from '../icons/layout';
import LinkIcon from './linkIcon';
import Image from 'next/image';
import CompanyInfo from './companyInfo';

export default function Contact() {
	return (
		<MenuTrigger>
			<Button aria-label='Contact Menu' role='tab'>
				Contact
			</Button>
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
							<apsn>(423) 276-1041</apsn>
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
						<LinkIcon icon='dashboard' label='Company Dashboard' />
						<LinkIcon icon='communications' label='My Communications' />
						<LinkIcon icon='invoice' label='Invoices' />
					</Section>
					<Separator className='mt-2' />
					<Section className='links'>
						<LinkIcon href='/Quote' label='Online Quotes' icon='quote' />
						<LinkIcon
							href='/Qualifications'
							label='Check Qualifications'
							icon='checklist'
						/>
						<LinkIcon href='Reviews' label='Leave Review' icon='Reviews' />
					</Section>
				</Menu>
			</Popover>
		</MenuTrigger>
	);
}
