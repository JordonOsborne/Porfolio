import Link from 'next/link'
import Navigation from '../Components/Navigation'
import Image from 'next/image'

export default function Header() {
	return (
		<header
			role='navigation'
			aria-label='Main'
		>
			<Link href='/'>
				<Image
					src='/img/Logo_white.svg'
					alt='JordonOsborne.dev Logo'
					title='JOsborne.dev'
					height='25px'
					width='225px'
				/>
			</Link>
			<Navigation />
		</header>
	)
}
