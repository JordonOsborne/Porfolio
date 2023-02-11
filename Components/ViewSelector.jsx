import { useState, useEffect, useContext } from 'react'
import Dropdown from './Reusable/Dropdown'
import Loading from './Reusable/Loading'
import FirebaseAPI from '../Context/FirebaseAPI'

function ViewSelector() {
	const { isLoading, table } = useContext(FirebaseAPI)
	const [views, setViews] = useState([])

	const GetViews = (table) => {
		switch (table) {
			case 'Clients':
				setViews([
					{ value: 'All', displayName: 'All' },
					{ value: 'Active', displayName: 'Active' },
				])
				return
			default:
				setViews([])
				return
		}
	}

	useEffect(() => {
		GetViews(table)
	}, [table])

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Dropdown
					Name='View'
					Default='All'
					Options={views}
				/>
			)}
		</>
	)
}

export default ViewSelector
