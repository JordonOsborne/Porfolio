import styles from '../../styles/Admin.module.scss'
import Loading from '../Reusable/Loading'
import ViewSelector from '../../Components/ViewSelector'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
// TABLES
import Clients from './Clients'
import Users from './Users'
import Projects from './Projects'
import Communications from './Communications'
import Invoices from './Invoices'
// GRIDS
import ClientsGrid from '../Grids/Clients'
import UsersGrid from '../Grids/Users'
import ProjectsGrid from '../Grids/Projects'
import CommunicationsGrid from '../Grids/Communications'
import InvoicesGrid from '../Grids/Invoices'

function TableSwitch() {
	const { isLoading, table, viewType, setViewType, setShowForm, setFormData } =
		useContext(FirebaseAPI)

	const ChooseData = () => {
		switch (table) {
			case 'Clients':
				return viewType !== 'Grid' ? <Clients /> : <ClientsGrid />
			case 'Users':
				return viewType !== 'Grid' ? <Users /> : <UsersGrid />
			case 'My-Work':
				return viewType !== 'Grid' ? <Projects /> : <ProjectsGrid />
			case 'Communications':
				return viewType !== 'Grid' ? <Communications /> : <CommunicationsGrid />
			case 'Invoices':
				return viewType !== 'Grid' ? <Invoices /> : <InvoicesGrid />
			default:
				break
		}
	}

	const NewForm = () => {
		setFormData(null)
		setShowForm(true)
	}

	return (
		<>
			<div className={styles.Menu}>
				<button onClick={() => NewForm()}>
					<IoMdAddCircle />
					New
				</button>
				<ViewSelector />
			</div>
			{isLoading ? <Loading /> : ChooseData()}
		</>
	)
}

export default TableSwitch
