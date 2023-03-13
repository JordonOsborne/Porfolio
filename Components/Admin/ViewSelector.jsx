import styles from '../../styles/Admin.module.scss'
import { useContext } from 'react'
import ViewFilter from '../Reusable/ViewFilter'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { AiOutlineUnorderedList, AiOutlineAppstore } from 'react-icons/ai'

function ViewSelector() {
	const { table, viewType, setViewType } = useContext(FirebaseAPI)

	return (
		<div className={styles.viewSelector}>
			{table === 'Clients' && <ViewFilter />}
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
	)
}

export default ViewSelector