import {
	Button,
	Menu,
	MenuItem,
	DialogTrigger,
	Popover,
	Link,
} from 'react-aria-components'
import AboutDetails from '../header/about/details'
import ProjectsDetails from '../header/projects/details'
import ContactDetails from '../header/contact/details'
import UserDetails from '../header/user/details'
import Image from 'next/image'
import Icon from '../Icons/icon'
import { usePathname } from 'next/navigation'
import { useState, useContext } from 'react'
import AuthContext from '../../lib/auth'

function mobileMenu() {
	const pathname = usePathname().replace('/', '')
	const [expanded, setExpanded] = useState(pathname)
	const { user } = useContext(AuthContext)
	const toggleMenu = (selected) => {
		if (selected == expanded) {
			setExpanded(null)
		} else {
			setExpanded(selected)
		}
	}
	const isActive = (id) => {
		if (pathname == id) {
			return ' bg-primary text-light'
		} else if (id == expanded) {
			return 'expanded'
		} else {
			return undefined
		}
	}
	return (
		<DialogTrigger className='align-items-start'>
			<Button aria-label='Menu'>
				<span aria-hidden='true'></span>
				<span aria-hidden='true'></span>
				<span aria-hidden='true'></span>
			</Button>
			<Popover className='mobile-menu'>
				<Menu aria-label='Navigation' className='focus:outline-none'>
					<MenuItem id='Home' className={isActive('')}>
						<Link href='/'>
							<Icon name='home' />
							<span>Home</span>
						</Link>
					</MenuItem>
					<MenuItem id='About' className={isActive('About')}>
						<Link href='/About'>
							<Icon name='about' />
							<span>About</span>
						</Link>
						<Icon
							name='expand'
							className='fill-current'
							onClick={() => toggleMenu('About')}
						/>
					</MenuItem>
					{expanded == 'About' && <AboutDetails />}
					<MenuItem id='Projects' className={isActive('Projects')}>
						<Link href='/Projects'>
							<Icon name='projects' />
							<span>Projects</span>
						</Link>
						<Icon
							name='expand'
							className='fill-current'
							onClick={() => toggleMenu('Projects')}
						/>
					</MenuItem>
					{expanded == 'Projects' && <ProjectsDetails />}
					<MenuItem id='Contact' className={isActive('Contact')}>
						<Link href='/Contact'>
							<Icon name='contact' />
							<span>Contact</span>
						</Link>
						<Icon
							name='expand'
							className='fill-current'
							onClick={() => toggleMenu('Contact')}
						/>
					</MenuItem>
					{expanded == 'Contact' && <ContactDetails />}
					<MenuItem id='User' className={isActive('User')}>
						{user ? (
							<Link href='/User'>
								<Image
									src={user?.imageUrl ? user?.imageUrl : '/img/Avatar.png'}
									alt={user?.name}
									className='p-1 rounded-full'
									width='40'
									height='40'
								/>
								<span>{user?.firstName ? user.firstName : 'User Menu'}</span>
							</Link>
						) : (
							<Link href='/Login'>
								<Icon name='login' />
								<span>Login</span>
							</Link>
						)}
						<Icon
							name='expand'
							className='fill-current'
							onClick={() => toggleMenu('User')}
						/>
					</MenuItem>
					{expanded == 'User' && <UserDetails />}
				</Menu>
			</Popover>
		</DialogTrigger>
	)
}

export default mobileMenu
