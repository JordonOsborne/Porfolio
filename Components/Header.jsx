import Link from 'next/link'
import Navigation from '../Components/Navigation'

export default function Header() {
	return (
		<header>
			<Link href='/'>
				<img
					src='/img/Logo_white.svg'
					alt='JordonOsborne.dev Logo'
					title='JOsborne.dev'
				/>
			</Link>
			<Navigation />
		</header>
	)
}
