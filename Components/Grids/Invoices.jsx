import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Communications() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Invoices', id)
		setShowForm(true)
	}
	return (
		<div
			id={styles.Invoices}
			className={styles.Grid}
		>
			{data.map((invoice) => (
				<div
					key={invoice.id}
					id={invoice.id}
					className={styles.Card}
					onClick={() => EditForm(invoice.id)}
				>
					<iframe
						src=''
						width='100%'
						height='300px'
					></iframe>
				</div>
			))}
		</div>
	)
}
export default Communications
