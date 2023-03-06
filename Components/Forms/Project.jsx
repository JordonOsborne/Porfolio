import styles from '../../styles/Forms.module.scss'
import Input from '../Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import Upload from '../Reusable/Upload'
import RichTextInput from '../Reusable/RichTextInput'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import MultiSelect from '../Reusable/MultiSelect'

export default function User() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [clients, setClients] = useState([])
	const allowedTypes = ['image/png, image/jpeg, image/svg']

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
				{formData?.Project && formData?.Company && (
					<>
						<Upload
							Id='MockUpImg'
							Label='Mock-Up Image'
							Types={allowedTypes}
							Source={formData?.MockUpImg}
							filePath={`${formData.Company.id}/${formData.Project}/Mock-Up.png`}
						/>
						<Upload
							Id='Images'
							Label='Images'
							Types={allowedTypes}
							Source={formData?.Images}
							filePath={`${formData.Company.id}/Images`}
							Multiple={true}
						/>
					</>
				)}
				<Dropdown
					Name='Company'
					Default={formData?.Company}
					Options={clients}
					ShowLabel={true}
					Icon='Client'
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
					Id='Project'
					Label='Project Name'
					Default={formData?.Project}
					Icon='Code'
					Required={true}
				/>
				<Input
					Id='URL'
					Label='URL'
					Placeholder='URL to Project or Github'
					Default={formData?.URL}
					Icon='URL'
				/>
				<MultiSelect
					Id='Technology'
					Label='Technology Used'
					Default={formData?.Technology}
					Options={[
						{ displayName: 'WIX', value: 'WIX' },
						{ displayName: 'JavaScript', value: 'JS' },
					]}
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
