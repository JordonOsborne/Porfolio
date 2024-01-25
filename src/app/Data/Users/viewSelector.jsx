import Icon from '../../Icons/icon'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function viewSelector() {
	const router = useRouter()
	const path = usePathname()
	const params = useSearchParams()
	const q = params.get('q')
	let paramString = ''
	if (q) {
		paramString = '&q=' + q
	}
	const setView = (view) => {
		router.push(path + '?view=' + view + paramString)
	}
	return (
		<div className='flex items-center justify-center'>
			<button onClick={() => setView('table')} className='p-1'>
				<Icon name='list' size='sm' />
			</button>
			<button onClick={() => setView('grid')} className='p-1'>
				<Icon name='grid' size='sm' />
			</button>
		</div>
	)
}
