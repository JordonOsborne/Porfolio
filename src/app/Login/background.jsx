import Image from 'next/image'

export default function background() {
	return (
		<div className='-z-50 absolute top-0 left-0 w-screen h-screen overflow-hidden'>
			<Image
				src='/img/PowerBI.png'
				alt='PowerBI'
				width='200'
				height='200'
				priority
				className='opacity-0 size-0 md:size-full md:opacity-20 transition duration-1000 rotate-45 absolute -left-12 top-1/3'
			/>
			<Image
				src='/img/PowerAutomate.png'
				alt='Power Automate'
				width='250'
				height='250'
				priority
				className='opacity-0 size-0 md:size-full md:opacity-20 transition duration-1000 -rotate-12 absolute left-1/3 bottom-24'
			/>
			<Image
				src='/img/PowerApps.png'
				alt='Power Apps'
				width='200'
				height='200'
				priority
				className='opacity-0 size-0 lg:size-full lg:opacity-20 transition duration-1000 rotate-12 absolute left-2/3 bottom-64 lg:bottom-48'
			/>
			<Image
				src='/img/SharePoint.png'
				alt='SharePoint'
				width='300'
				height='300'
				priority
				className='opacity-20 -rotate-45 absolute -right-24 -bottom-10'
			/>
		</div>
	)
}
