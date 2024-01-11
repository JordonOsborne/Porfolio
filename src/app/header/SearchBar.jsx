'use client'
import Icon from '../Icons/icon'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function searchBar() {
	const router = useRouter()
	const path = usePathname()
	const q = useSearchParams().get('q')
	const placeholderText = () => {
		switch (path) {
			case '/Icons':
				return 'Search Icons'
			default:
				return 'Search Porfolio'
		}
	}

	const Search = (text) => {
		if (!text) {
			router.push(path)
		} else {
			router.push(`${path}?q=${text}`)
		}
	}

	return (
		<div className='relative hidden lg:block'>
			<span className='absolute bottom-[2px] left-2'>
				<Icon
					icon='search'
					size='small'
					className='fill-dark dark:fill-light'
				/>
			</span>
			<input
				type='search'
				placeholder={placeholderText()}
				value={!q ? '' : q}
				aria-placeholder='Search Porfolio'
				className='p-[2px] pl-9 text-sm font-extralight rounded-full w-80 border-[1px] border-neutral-700 dark:border-neutral-800 focus:outline-none bg-neutral-600 dark:bg-neutral-900 placeholder:italic'
				onChange={(e) => Search(e.target.value)}
			/>
		</div>
	)
}

// SEARCH FUNCTIONS
export function IconSearch(icons, q) {
	const matches = icons.filter((icon) => icon.name.includes(q))
	return matches
}
