import { Tabs, TabList, Tab, Link } from 'react-aria-components'
import { usePathname } from 'next/navigation'
import AboutMenu from './about/menu'
import ProjectsMenu from './projects/menu'
import ContactMenu from './contact/menu'
import UserMenu from './user/menu'
import MobileMenu from './mobileMenu'

function menu({ isMobile }) {
	const pathname = usePathname().replace('/', '')
	if (isMobile) {
		return <MobileMenu />
	} else {
		return (
			<Tabs selectedKeys={pathname}>
				<TabList aria-label='Navigation' className='navigation'>
					<Tab id='Home'>
						<Link href='/'>Home</Link>
					</Tab>
					<Tab id='About'>
						<AboutMenu />
					</Tab>
					<Tab id='Projects'>
						<ProjectsMenu />
					</Tab>
					<Tab id='Contact'>
						<ContactMenu />
					</Tab>
					<Tab
						id='User'
						className='hover:border-none focus-visible:outline-none'
					>
						<UserMenu />
					</Tab>
				</TabList>
			</Tabs>
		)
	}
}

export default menu
