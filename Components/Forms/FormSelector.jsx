import Actions from './Actions'
import styles from '../../styles/Forms.module.scss'
import Client from './Client'
import User from './User'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'
import { useEffect, useState } from 'react'

function FormSelector({ Id, CloseForm }) {
	const { table, formData, GetDoc } = useContext(FirebaseAPI)
	const [form, setForm] = useState(null)

	useEffect(() => {
		if (Id) {
			GetDoc(table, Id)
		}
		GetForm(table)
	}, [table, Id])

	const GetForm = (table) => {
		switch (table) {
			case 'Clients':
				return setForm(document.Clients)
			case 'Users':
				return setForm(document.Users)
			default:
				break
		}
	}

	const ChooseForm = (formData) => {
		switch (table) {
			case 'Clients':
				return <Client data={formData} />
			case 'Users':
				return <User data={formData} />
			default:
				break
		}
	}

	return (
		<div className={styles.SidePanel}>
			<Actions
				CloseForm={CloseForm}
				Form={form}
			/>
			{ChooseForm(formData)}
		</div>
	)
}

export default FormSelector
