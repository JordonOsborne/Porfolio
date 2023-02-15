import styles from '../styles/Admin.module.scss'
import Loading from '../Components/Reusable/Loading'
import FirebaseAPI from '../Context/FirebaseAPI'
import { useContext } from 'react'
import { FaFileInvoiceDollar } from 'react-icons/fa'

function Table() {
	const { table, data, isLoading, setShowForm, GetDoc } =
		useContext(FirebaseAPI)

	const EditForm = async (id) => {
		await GetDoc(table, id)
		setShowForm(true)
	}

	const TableHeader = (table) => {
		switch (table) {
			case 'Communications':
				return (
					<tr>
						<th>Form</th>
						<th>Subject</th>
						<th>Submitted</th>
					</tr>
				)
			case 'Invoices':
				return (
					<tr>
						<th>Client</th>
						<th>Charge</th>
						<th>Date</th>
						<th>Reminder Sent</th>
						<th>Paid On</th>
					</tr>
				)
			default:
				return
		}
	}
	const TableRow = (data) => {
		switch (table) {
			case 'Communications':
				return data.map((communication) => {
					return (
						<tr key={communication.id}>
							<td>{communication?.Form}</td>
							<td>{communication?.Subject}</td>
							<td>{communication?.Submitted?.toDate().toDateString()}</td>
						</tr>
					)
				})
			case 'Invoices':
				return data.map((invoice) => {
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
				})
			default:
				return
		}
	}

	return (
		<>
			{isLoading && <Loading />}
			{!isLoading && (
				<table className={styles.Collection}>
					<thead>{TableHeader(table)}</thead>
					<tbody>{TableRow(data)}</tbody>
				</table>
			)}
		</>
	)
}

export default Table
