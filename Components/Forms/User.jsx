import styles from '../../styles/Forms.module.scss'
import Input from '../Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
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
			id={formData ? formData.id : 'NewUserForm'}
			name='Users'
		>
			<h2>
				{formData
					? `${formData.FirstName} ${formData.LastName}`
					: `New User Form`}
			</h2>
			<div className={styles.Container}>
				<Dropdown
					Name='Company'
					Default={formData ? formData.Company : ''}
					Options={clients}
					ShowLabel={true}
					Icon='Client'
				/>
				<Input
					Id='FirstName'
					Label='First Name'
					Default={formData ? formData.FirstName : ''}
					Icon='Person'
				/>
				<Input
					Id='LastName'
					Label='Last Name'
					Default={formData ? formData.LastName : ''}
					Icon='Person'
				/>
				<Input
					Id='Phone'
					Label='Phone Number'
					Default={formData ? formData.Phone : ''}
					Icon='Phone'
				/>
				<Input
					Id='Email'
					Label='Email'
					Placeholder='Enter e-mail address'
					Default={formData ? formData.Email : ''}
					Icon='Email'
				/>
			</div>
		</form>
	)
}
