import Actions from './Actions'
import styles from '../../styles/Forms.module.scss'
import Client from './Client'
import User from './User'
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
