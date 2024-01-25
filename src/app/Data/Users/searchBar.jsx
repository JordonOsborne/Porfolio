import Icon from '../../Icons/icon'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function searchBar() {
	const router = useRouter()
	const path = usePathname()
	const params = useSearchParams()
	const q = params.get('q')

	const Search = (text) => {
		if (!text) {
			router.push(path)
		} else {
			router.push(`${path}?q=${text}`)
		}
	}

	return (
		<div className='relative block'>
			<span className='absolute bottom-[2px] left-2'>
				<Icon name='search' size='sm' className='fill-dark dark:fill-light' />
			</span>
			<input
				type='search'
				placeholder='Search Users'
				value={!q ? '' : q}
				aria-placeholder='Search Users'
				className='p-[2px] pl-9 mt-2 text-sm font-extralight rounded-full w-64 border-[1px] border-neutral-700 dark:border-neutral-800 focus:outline-none bg-neutral-600 dark:bg-neutral-900 placeholder:italic'
				onChange={(e) => Search(e.target.value)}
			/>
		</div>
	)
}
