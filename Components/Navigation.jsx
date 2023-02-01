import Link from 'next/link'
import UserMenu from '../Components/UserMenu'
import { useRouter } from 'next/router'
import { RiLoginCircleFill } from 'react-icons/ri'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

export default function Navigation() {
	const router = useRouter()
	const user = useContext(AuthContext)

	return (
		<nav>
			<div className={router.asPath == '/' ? 'active' : ''}>
				<Link href='/'>Home</Link>
			</div>
			<div className={router.asPath == '/About' ? 'active' : ''}>
				<Link href='/ComingSoon'>About</Link>
			</div>
			<div className={router.asPath == '/Projects' ? 'active' : ''}>
				<Link href='/ComingSoon'>Projects</Link>
			</div>
			<div className={router.asPath == '/Contact' ? 'active' : ''}>
				<Link href='/ComingSoon'>Contact</Link>
			</div>
			{router.asPath != '/SignIn' &&
				router.asPath != '/Admin' &&
				(!user ? (
					<div className='Login'>
						<RiLoginCircleFill className='Login' />
						<Link href='/SignIn'>Sign In</Link>
					</div>
				) : (
					<UserMenu user={user} />
				))}
		</nav>
	)
}
