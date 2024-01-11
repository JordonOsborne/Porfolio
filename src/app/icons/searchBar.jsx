'use client'
import Icon from '../Icons/icon'
import { useRouter } from 'next/navigation'

export default function searchBar({ q }) {
	const router = useRouter()

	const Search = (text) => {
		if (!text) {
			router.push('/Icons')
		} else {
			router.push(`/Icons?q=${text}`)
		}
	}

	return (
		<div className='relative block lg:hidden'>
			<span className='absolute bottom-[2px] left-2'>
				<Icon
					icon='search'
					size='small'
					className='fill-dark dark:fill-light'
				/>
			</span>
			<input
				type='search'
				placeholder='Search Icons'
				value={!q ? '' : q}
				aria-placeholder='Search Icons'
				className='p-[2px] pl-9 text-sm font-extralight rounded-full w-48 sm:w-80 border-[1px] border-neutral-700 dark:border-neutral-800 focus:outline-none bg-neutral-600 dark:bg-neutral-900 placeholder:italic'
				onChange={(e) => Search(e.target.value)}
			/>
		</div>
	)
}
