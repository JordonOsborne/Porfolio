'use client'
import EmailForm from './emailForm'
import AuthProviders from './authProviders'
import AuthContext from '../../../context/auth'
import { useContext } from 'react'

export default function Login() {
	const { user } = useContext(AuthContext)

	if (user) {
		return (
			<main>
				<h3 className='mt-4 text-center'>Welcome back {user.name}!</h3>
			</main>
		)
	} else {
		return (
			<main>
				<h3 className='my-4 text-center text-xl lg:text-3xl lg:mt-20'>
					Welcome to JOsborne.dev!
				</h3>
				<p className='text-center italic text-xs font-light'>
					Please use login form to view client details.
				</p>
				<div className='py-4 px-2 flex flex-col lg:flex-row lg:justify-center lg:gap-2 items-center'>
					<EmailForm className='lg:flex lg:flex-col lg:w-1/2 lg:items-center' />
					<hr className='lg:hidden' />
					<h3 className='hidden lg:block'>OR</h3>
					<div className='lg:w-1/2'>
						<p className='py-2 text-center italic text-xs font-light'>
							If you prefer you may also login via Auth Providers below:
						</p>
						<AuthProviders />
					</div>
				</div>
			</main>
		)
	}
}
