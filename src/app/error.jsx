'use client'
import Image from 'next/image'
import NotAuthorized from './not-authorized'
import AuthContext from '../lib/auth'
import { useEffect, useContext } from 'react'

export default function Error({ error, reset }) {
	const { user } = useContext(AuthContext)
	useEffect(() => {
		console.log(error.message)
	}, [error])
	if (error.message == 'Not Authorized') {
		return <NotAuthorized reset={reset} />
	}
	return (
		<main className='flex flex-col items-center gap-4'>
			<h1 className='pt-8 md:pt-10 text-center font-bold lg:text-xxl'>
				Ummm...
			</h1>
			<p className='text-center text-base font-thin italic w-2/3'>
				We ran into an issue with this page. Either load this page again using
				the 'retry' button, or go back home.
			</p>
			{user?.isAdmin && (
				<p className='hidden sm:block text-primary text-center font-bold'>
					{error.message}
				</p>
			)}
			<Image
				src='/img/500-Error.png'
				alt='Not Found Error'
				className='max-w-full'
				width='500'
				height='500'
				priority
			/>
			<button
				onClick={() => reset()}
				className='py-2 px-12 rounded-md text-center bg-primary'
			>
				Try again
			</button>
		</main>
	)
}
