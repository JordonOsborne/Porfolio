'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className='flex flex-col items-center gap-4'>
			<h1 className='pt-8 md:pt-10 text-center font-bold lg:text-xxl'>
				Ummm...
			</h1>
			<h2 className='hidden sm:block text-primary text-center font-bold'>
				{error.message}
			</h2>
			<p className='text-center text-base font-thin italic'>
				We ran into an issue with this page. Either load this page again using
				the 'retry' button, or go back home.
			</p>
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

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}
