import styles from '../styles/Admin.module.scss'
import { useState, useEffect, useContext } from 'react'
import Dropdown from './Reusable/Dropdown'
import Loading from './Reusable/Loading'
import FirebaseAPI from '../Context/FirebaseAPI'
import { AiOutlineUnorderedList, AiOutlineAppstore } from 'react-icons/ai'

function ViewSelector({ selected, setSelected }) {
	const { isLoading, table } = useContext(FirebaseAPI)
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
						Name='View'
						Default={{ value: 'All', displayName: 'All' }}
						Options={views}
					/>
					<div className={styles.viewType}>
						<button
							title='List View'
							className={selected === 'List' && styles.Selected}
							onClick={() => setSelected('List')}
						>
							<AiOutlineUnorderedList />
						</button>
						<button
							title='Grid View'
							className={selected === 'Grid' && styles.Selected}
							onClick={() => setSelected('Grid')}
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
