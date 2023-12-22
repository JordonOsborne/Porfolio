import {
	Button,
	Menu,
	MenuItem,
	DialogTrigger,
	Popover,
	Link,
} from 'react-aria-components';
import Icon from '../icons/layout';
import AboutDetails from '../header/about/details';
import ProjectsDetails from '../header/projects/details';
import ContactDetails from '../header/contact/details';
import UserDetails from '../header/user/details';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function mobileMenu() {
	const pathname = usePathname().replace('/', '');
	const [expanded, setExpanded] = useState(pathname);
	const [user, setUser] = useState({
		name: 'John Doe',
		phone: '(423) 276-1041',
		email: 'JohnDoe@outlook.com',
		imageUrl: '/img/User.png',
		theme: 'Dark',
	});
	const toggleMenu = (selected) => {
		if (selected == expanded) {
			setExpanded(null);
		} else {
			setExpanded(selected);
		}
	};
	const isActive = (id) => {
		if (pathname == id) {
			return ' bg-primary text-light';
		} else if (id == expanded) {
			return 'expanded';
		} else {
			return undefined;
		}
	};
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
							<Icon icon='Home' />
							<span>Home</span>
						</Link>
					</MenuItem>
					<MenuItem id='About' className={isActive('About')}>
						<Link href='/About'>
							<Icon icon='About' />
							<span>About</span>
						</Link>
						<Icon
							icon='ChevronUp'
							className='fill-current'
							onClick={() => toggleMenu('About')}
						/>
					</MenuItem>
					{expanded == 'About' && <AboutDetails />}
					<MenuItem id='Projects' className={isActive('Projects')}>
						<Link href='/Projects'>
							<Icon icon='Projects' />
							<span>Projects</span>
						</Link>
						<Icon
							icon='ChevronUp'
							className='fill-current'
							onClick={() => toggleMenu('Projects')}
						/>
					</MenuItem>
					{expanded == 'Projects' && <ProjectsDetails />}
					<MenuItem id='Contact' className={isActive('Contact')}>
						<Link href='/Contact'>
							<Icon icon='Contact' />
							<span>Contact</span>
						</Link>
						<Icon
							icon='ChevronUp'
							className='fill-current'
							onClick={() => toggleMenu('Contact')}
						/>
					</MenuItem>
					{expanded == 'Contact' && <ContactDetails />}
					<MenuItem id='User' className={isActive('User')}>
						<div>
							<Image
								src={user?.imageUrl}
								alt={user?.name}
								className='p-1'
								width='40'
								height='40'
							/>
							<span>User</span>
						</div>
						<Icon
							icon='ChevronUp'
							className='fill-current'
							onClick={() => toggleMenu('User')}
						/>
					</MenuItem>
					{expanded == 'User' && <UserDetails user={user} setUser={setUser} />}
				</Menu>
			</Popover>
		</DialogTrigger>
	);
}

export default mobileMenu;
