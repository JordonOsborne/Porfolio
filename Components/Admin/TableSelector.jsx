import styles from '../../styles/Admin.module.scss'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { FaUsers, FaFileInvoiceDollar, FaCode } from 'react-icons/fa'
import { GrOrganization } from 'react-icons/gr'
import { GoCommentDiscussion } from 'react-icons/go'
import { useContext, useEffect } from 'react'

function TableSelector() {
	const { user } = useContext(AuthContext)
	const { table, collectionTotals, setTable } = useContext(FirebaseAPI)

	useEffect(() => {
		if (user?.isAdmin) {
			setTable('Clients')
		} else {
			setTable('Users')
		}
	}, [user])

	return (
		<div className={styles.Forms}>
			{user.isAdmin && (
				<button
					className={table === 'Clients' ? styles.selected : undefined}
					onClick={() => setTable('Clients')}
				>
					<GrOrganization />
					{collectionTotals.Clients === 1
						? collectionTotals.Clients + ` Client`
						: collectionTotals.Clients + ` Clients`}
				</button>
			)}
			<button
				className={table === 'Users' ? styles.selected : undefined}
				onClick={() => setTable('Users')}
			>
				<FaUsers />
				{collectionTotals.Users} Users
			</button>
			{user.isAdmin && (
				<button
					className={table === 'Projects' ? styles.selected : undefined}
					onClick={() => setTable('Projects')}
				>
					<FaCode />
					{collectionTotals.Projects === 1
						? collectionTotals.Projects + ` Project`
						: collectionTotals.Projects + ` Projects`}
				</button>
			)}
			<button
				className={table === 'Communications' ? styles.selected : undefined}
				onClick={() => setTable('Communications')}
			>
				<GoCommentDiscussion />
				{collectionTotals.Communications === 1
					? collectionTotals.Communications + ` Communication`
					: collectionTotals.Communications + ` Communications`}
			</button>
			<button
				className={table === 'Invoices' ? styles.selected : undefined}
				onClick={() => setTable('Invoices')}
			>
				<FaFileInvoiceDollar />
				{collectionTotals.Invoices === 1
					? collectionTotals.Invoices + ` Invoice`
					: collectionTotals.Invoices + ` Invoices`}
			</button>
		</div>
	)
}

export default TableSelector
