'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabList, Tab } from 'react-aria-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import AboutMenu from './aboutMenu';
import ProjectsMenu from './projectsMenu';
import ContactMenu from './contactMenu';

export default function header() {
	const pathname = usePathname().replace('/', '');

	return (
		<header>
			<Link href='/' title='JOsborne.dev Home'>
				<Logo size={30} />
			</Link>
			<SearchBar />
			<Tabs defaultSelectedKey={pathname}>
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
				</TabList>
			</Tabs>
		</header>
	);
}
