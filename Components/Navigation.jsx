import Link from 'next/link'
import { auth } from '../firebase.config'
import { useRouter } from 'next/router'
import { RiLoginCircleFill, RiLogoutCircleFill } from 'react-icons/ri'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

export default function Navigation() {
	const router = useRouter()
	const user = useContext(AuthContext)

	const LogOut = async (e) => {
		e.preventDefault()
		await auth.signOut()
	}

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
				(!user ? (
					<div className='Login'>
						<RiLoginCircleFill className='Login' />
						<Link href='/SignIn'>Sign In</Link>
					</div>
				) : (
					<div
						className='Login'
						onClick={(e) => {
							LogOut(e)
						}}
					>
						<RiLogoutCircleFill className='Login' />
						<Link href='#'>Log Out</Link>
					</div>
				))}
		</nav>
	)
}
