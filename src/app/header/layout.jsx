'use client'
import Link from 'next/link'
import useIsMobile from '../../utilities/useIsMobile'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Menu from './menu'

export default function header() {
	const isMobile = useIsMobile()

	return (
		<header>
			<Link href='/' title='JOsborne.dev Home'>
				<Logo size={30} />
			</Link>
			<SearchBar />
			<Menu isMobile={isMobile} />
		</header>
	)
}
