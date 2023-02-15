import Actions from './Actions'
import styles from '../../styles/Forms.module.scss'
import Client from './Client'
import User from './User'
import Project from './Project'
import Communication from './Communication'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function FormSwitch() {
	const { table } = useContext(FirebaseAPI)

	const ChooseForm = () => {
		switch (table) {
			case 'Clients':
				return <Client />
			case 'Users':
				return <User />
			case 'My-Work':
				return <Project />
			case 'Communications':
				return <Communication />
			default:
				break
		}
	}

	return (
		<div className={styles.SidePanel}>
			<Actions />
			{ChooseForm()}
		</div>
	)
}

export default FormSwitch
