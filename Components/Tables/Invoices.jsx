import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'
import { FaFileInvoiceDollar } from 'react-icons/fa'

function Invoices() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Invoices', id)
		setShowForm(true)
	}
	return (
		<table className={styles.Collection}>
			<thead>
				<tr>
					<th>Client</th>
					<th>Charge</th>
					<th>Date</th>
					<th>Reminder Sent</th>
					<th>Paid On</th>
				</tr>
			</thead>
			<tbody>
				{data.map((invoice) => {
					return (
						<tr key={invoice.id}>
							<td title={invoice?.Client}>
								<a
									href={invoice?.File}
									title={invoice?.Date?.toDate().toDateString() + ` Invoice`}
								>
									<FaFileInvoiceDollar />
								</a>
								{invoice.Client}
							</td>
							<td>{`$` + invoice?.Charge}</td>
							<td>{invoice.Date?.toDate().toDateString()}</td>
							<td>{invoice.ReminderSent?.toDate().toDateString()}</td>
							<td>{invoice.PaidOn?.toDate().toDateString()}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Invoices
