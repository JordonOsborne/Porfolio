import styles from '../../styles/Admin.module.scss'
import ViewSelector from './ViewSelector'
import ViewTypeSwitch from './ViewTypeSwitch'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { IoMdAddCircle } from 'react-icons/io'

function TableSwitch({ Client }) {
	const router = useRouter()
	const { table, setShowForm, setFormData } = useContext(FirebaseAPI)
	const { user } = useContext(AuthContext)

	const NewForm = () => {
		setFormData(null)
		setShowForm(true)
	}

	const TableHeader = () => {
		if (!Client && user.isAdmin && table !== 'Communications') {
			return (
				<button
					onClick={() =>
						table === 'Users' ? router.push('/SignIn?Register=true') : NewForm()
					}
				>
					<IoMdAddCircle />
					New
				</button>
			)
		}
		switch (table) {
			case 'Users':
				return <h2>Site Administrators</h2>
			case 'Communications':
				return <h2>Site Communication</h2>
			case 'Invoices':
				return <h2>Invoices</h2>
			default:
				return
		}
	}

	return (
		<>
			<div className={styles.Menu}>
				{TableHeader()}
				<ViewSelector />
			</div>
			<ViewTypeSwitch />
		</>
	)
}

export default TableSwitch
