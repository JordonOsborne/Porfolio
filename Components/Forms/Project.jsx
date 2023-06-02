import styles from '../../styles/Forms.module.scss'
import Input from '../Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import MultiLine from '../Reusable/MultiLine'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import MultiSelect from '../Reusable/MultiSelect'

export default function User() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [clients, setClients] = useState([])
	const allowedTypes = ['image/png, image/jpeg, image/svg']

	useEffect(() => {
		const GetClients = async () => {
			const Clients = await GetData('Clients', null, null, true)
			let clientsArray = []
			Clients.map((client) => {
				clientsArray.push({
					id: client.id,
					Company: client.Client,
					Logo: client.Logo,
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
					Id='Company'
					Label='Company'
					Default={formData?.Company}
					DisplayField='Company'
					Options={clients}
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
					Id='URL'
					Label='URL'
					Placeholder='URL to Project or Github'
					Default={formData?.URL}
					Icon='URL'
				/>
				<MultiLine
					Id='Description'
					Label='Description'
					Placeholder='Short description of project . . .'
					Default={formData?.Description}
				/>
				<MultiSelect
					Id='Technology'
					Label='Technology Used'
					Default={formData?.Technology ? formData.Technology : []}
					Options={[
						'WIX',
						'JavaScript',
						'HTML',
						'CSS',
						'SQL',
						'Firebase',
						'React',
						'Next JS',
						'SharePoint',
						'Power Apps',
						'Power Automate',
						'Power BI',
					]}
				/>
				<div className={styles.split}>
					<Input
						Id='Users'
						Label='Users'
						Placeholder='# of Users'
						Default={formData?.Users}
						Icon='Person'
					/>
					<Input
						Id='Forms'
						Label='Forms'
						Placeholder='# of Forms'
						Default={formData?.Forms}
						Icon='Number'
					/>
					<Input
						Id='Automations'
						Label='Automations'
						Placeholder='# of Automations'
						Default={formData?.Automations}
						Icon='Number'
					/>
					<Input
						Id='Reports'
						Label='Reports'
						Placeholder='# of Reports'
						Default={formData?.Reports}
						Icon='Number'
					/>
				</div>
				<Input
					Id='Rating'
					Label='Rating'
					Placeholder='Average Rating'
					Default={formData?.Rating}
					Icon='Rating'
				/>
			</div>
		</form>
	)
}
