'use client'
import Image from 'next/image'

export default function Error({ reset }) {
	return (
		<main className='flex flex-col items-center gap-4'>
			<h1 className='pt-8 md:pt-10 text-center text-primary font-bold lg:text-xxl'>
				Not Authorized
			</h1>
			<p className='text-center text-base font-thin italic w-2/3'>
				The current logged in user is not classified as a site Admin. Please log
				in under an administrator account select the 'retry' button if you
				believe this is an error.
			</p>
			<Image
				src='/img/Not-Authorized.png'
				alt='Not Authorized'
				className='max-w-full'
				width='400'
				height='300'
				priority
			/>
			<button
				onClick={() => reset()}
				className='mt-4 py-2 px-12 rounded-md text-center bg-primary'
			>
				Try again
			</button>
		</main>
	)
}
