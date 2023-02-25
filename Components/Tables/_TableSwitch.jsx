import styles from '../../styles/Admin.module.scss'
import Loading from '../Reusable/Loading'
import ViewSelector from '../../Components/ViewSelector'
import Clients from './Clients'
import ClientsGrid from '../Grids/Clients'
import Users from './Users'
import Projects from './Projects'
import Communications from './Communications'
import Invoices from './Invoices'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'

function TableSwitch() {
	const { isLoading, table, setShowForm, setFormData } = useContext(FirebaseAPI)
	const [selected, setSelected] = useState('List')

	const ChooseData = () => {
		switch (table) {
			case 'Clients':
				return selected === 'List' ? <Clients /> : <ClientsGrid />
			case 'Users':
				return <Users />
			case 'My-Work':
				return <Projects />
			case 'Communications':
				return <Communications />
			case 'Invoices':
				return <Invoices />
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
				<ViewSelector
					selected={selected}
					setSelected={setSelected}
				/>
			</div>
			{isLoading ? <Loading /> : ChooseData()}
		</>
	)
}

export default TableSwitch
