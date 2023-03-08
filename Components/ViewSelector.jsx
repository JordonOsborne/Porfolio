import styles from '../styles/Admin.module.scss'
import { useState, useEffect, useContext } from 'react'
import Dropdown from './Reusable/Dropdown'
import Loading from './Reusable/Loading'
import FirebaseAPI from '../Context/FirebaseAPI'
import { AiOutlineUnorderedList, AiOutlineAppstore } from 'react-icons/ai'

function ViewSelector() {
	const { isLoading, table, viewType, setViewType } = useContext(FirebaseAPI)
	const [views, setViews] = useState([])

	useEffect(() => {
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
		GetViews(table)
	}, [table])

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className={styles.viewSelector}>
					<Dropdown
						Id='View'
						Default={{ id: 'All', displayName: 'All' }}
						Options={views}
						DisplayField='displayName'
					/>
					<div className={styles.viewType}>
						<button
							title='List View'
							className={viewType === 'List' ? styles.Selected : undefined}
							onClick={() => setViewType('List')}
						>
							<AiOutlineUnorderedList />
						</button>
						<button
							title='Grid View'
							className={viewType === 'Grid' ? styles.Selected : undefined}
							onClick={() => setViewType('Grid')}
						>
							<AiOutlineAppstore />
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default ViewSelector
