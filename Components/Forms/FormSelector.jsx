import Actions from './Actions'
import styles from '../../styles/Forms.module.scss'
import Client from './Client'
import User from './User'
import { GetDoc } from '../../Context/FirebaseAPI'
import { useEffect, useState } from 'react'

function FormSelector({ Collection, Id, CloseForm }) {
	const [data, setData] = useState(null)
	const [form, setForm] = useState(null)

	const GetData = async () => {
		const dataRaw = await GetDoc(Collection, Id)
		setData(dataRaw.data())
	}

	useEffect(() => {
		if (Id) {
			GetData()
		}
		GetForm(Collection)
	}, [Collection, Id])

	const GetForm = (Collection) => {
		switch (Collection) {
			case 'Clients':
				return setForm(document.Clients)
			default:
				break
		}
	}

	const ChooseForm = (data) => {
		switch (Collection) {
			case 'Clients':
				return <Client data={data} />
			case 'Users':
				return <User data={data} />
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
			{ChooseForm(data)}
		</div>
	)
}

export default FormSelector
