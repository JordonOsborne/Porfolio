import Grid from './grid'
import Table from './table'
import { AlphaSort } from '../../../utilities/sort'
import { UserSearch } from '../../header/SearchBar'
import { useSearchParams } from 'next/navigation'

export default function DataView({ users, OpenModal }) {
	const params = useSearchParams()
	const view = params.get('view')
	const q = params.get('q')
	users = AlphaSort(users, 'LastName')
	// FILTER ICONS IS SEARCHED
	if (q) {
		users = UserSearch(users, q)
	}
	// RETURN GRID OR TABLE LAYOUT (DEFAULT: GRID)
	if (view !== 'table') {
		return <Grid users={users} OpenModal={OpenModal} />
	} else {
		return <Table users={users} OpenModal={OpenModal} />
	}
}
