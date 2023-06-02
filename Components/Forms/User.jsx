import styles from '../../styles/Forms.module.scss'
import Upload from '../Reusable/Upload'
import Input from '../Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

export default function User() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [clients, setClients] = useState([])

	useEffect(() => {
		const GetClients = async () => {
			const Clients = await GetData('Clients', null, null, true)
			let clientsArray = []
			Clients.map((client) => {
				clientsArray.push({
					id: client.id,
					Company: client.Client,
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
				<Upload
					Id='PhotoURL'
					Label='Profile Image'
					Types={['image/png, image/jpeg, image/svg']}
					filePath={`Users/${formData?.id}.jpg`}
					Source={formData?.PhotoURL}
				/>
				<Dropdown
					Id='Company'
					Default={formData?.Company}
					DisplayField='Company'
					Options={clients}
					ShowLabel={true}
					Icon='Client'
				/>
				<Input
					Id='FirstName'
					Label='First Name'
					Default={formData?.FirstName}
					Icon='Person'
				/>
				<Input
					Id='LastName'
					Label='Last Name'
					Default={formData?.LastName}
					Icon='Person'
				/>
				<Input
					Id='Phone'
					Label='Phone Number'
					Default={formData?.Phone}
					Icon='Phone'
				/>
				<Input
					Id='Email'
					Label='Email'
					Placeholder='Enter e-mail address'
					Default={formData?.Email}
					Icon='Email'
				/>
			</div>
		</form>
	)
}
