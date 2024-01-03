'use client'
import Link from 'next/link'
import Image from 'next/image'
import useIsMobile from '../../utilities/useIsMobile'

export default function NotFound() {
	const isMobile = useIsMobile()
	return (
		<main className='flex flex-col items-center gap-8'>
			<h1 className='pt-10 md:pt-20 text-center font-bold lg:text-xxl'>
				Oops!
			</h1>
			<p className='text-center text-lg font-thin italic'>
				Looks like you wondered off the path. Let's get you back home.
			</p>
			<Image
				src='/img/404-Error.png'
				alt='Not Found Error'
				className='mt-8 max-w-full md:max-w-lg'
				width={isMobile ? '400' : '800'}
				height={isMobile ? '300' : '600'}
				priority
			/>
			<Link href='/' className='py-2 px-12 rounded-md text-center bg-primary'>
				Go Home
			</Link>
		</main>
	)
}
