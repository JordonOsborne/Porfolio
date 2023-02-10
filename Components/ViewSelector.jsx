import { useState, useEffect } from 'react'
import Dropdown from './Reusable/Dropdown'
import Loading from './Reusable/Loading'

function ViewSelector({ Collection }) {
	const [isLoading, setIsLoading] = useState(true)
	const [views, setViews] = useState([])

	const GetViews = (Collection) => {
		switch (Collection) {
			case 'Clients':
				setViews([
					{ value: 'All', displayName: 'All' },
					{ value: 'Active', displayName: 'Active' },
				])
				setIsLoading(false)
				return
			default:
				setViews([])
				setIsLoading(false)
				return
		}
	}

	useEffect(() => {
		GetViews(Collection)
	}, [Collection])

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
