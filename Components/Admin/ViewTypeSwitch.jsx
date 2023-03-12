import { useContext } from 'react'
import FirebaseAPI from '../../Context/FirebaseAPI'
// TABLES
import Clients from '../Tables/Clients'
import Users from '../Tables/Users'
import Projects from '../Tables/Projects'
import Communications from '../Tables/Communications'
import Invoices from '../Tables/Invoices'
// GRIDS
import ClientsGrid from '../Grids/Clients'
import UsersGrid from '../Grids/Users'
import ProjectsGrid from '../Grids/Projects'
import CommunicationsGrid from '../Grids/Communications'
import InvoicesGrid from '../Grids/Invoices'

function ViewTypeSwitch() {
	const { table, viewType } = useContext(FirebaseAPI)
	switch (table) {
		case 'Clients':
			return viewType !== 'Grid' ? <Clients /> : <ClientsGrid />
		case 'Users':
			return viewType !== 'Grid' ? <Users /> : <UsersGrid />
		case 'Projects':
			return viewType !== 'Grid' ? <Projects /> : <ProjectsGrid />
		case 'Communications':
			return viewType !== 'Grid' ? <Communications /> : <CommunicationsGrid />
		case 'Invoices':
			return viewType !== 'Grid' ? <Invoices /> : <InvoicesGrid />
		default:
			return
	}
}

export default ViewTypeSwitch
