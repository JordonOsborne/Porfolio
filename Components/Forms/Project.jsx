import styles from '../../styles/Forms.module.scss'
import Input from '../Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import RichTextInput from '../Reusable/RichTextInput'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

export default function User() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [clients, setClients] = useState([])

	useEffect(() => {
		const GetClients = async () => {
			const Clients = await GetData('Clients', true)
			let clientsArray = []
			Clients.map((client) => {
				clientsArray.push({
					value: client.id,
					displayName: client.Client,
				})
			})
			setClients(clientsArray)
		}
		GetClients()
	}, [])

	return (
		<form
			id={formData ? formData.id : 'NewProjectForm'}
			name='Projects'
		>
			<h2>{formData ? formData.Project : `New Project Form`}</h2>
			<div className={styles.Container}>
				<Dropdown
					Name='Company'
					Default={formData?.Company}
					Options={clients}
					ShowLabel={true}
					Icon='Client'
					Required={true}
				/>
				<Input
					Id='Project'
					Label='Project Name'
					Default={formData?.Project}
					Icon='Code'
					Required={true}
				/>
				<Input
					Id='Date'
					Label='Date Completed'
					Default={formData?.Date}
					Icon='Date'
					Required={true}
				/>
				<Input
					Id='Link'
					Label='Link Name'
					Default={formData?.Link}
					Icon='Text'
				/>
				<Input
					Id='URL'
					Label='URL'
					Placeholder='URL to Project or Github'
					Default={formData?.URL}
					Icon='URL'
				/>
				<RichTextInput
					Id='Description'
					Label='Project Details'
					Default={formData?.Description}
				/>
			</div>
		</form>
	)
}
