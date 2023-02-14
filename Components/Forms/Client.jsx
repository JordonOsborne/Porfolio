import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import Dropdown from '../../Components/Reusable/Dropdown'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

function Client() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [users, setUsers] = useState([])

	useEffect(() => {
		const GetUsers = async () => {
			const Users = await GetData('Users', true)
			let usersArray = []
			Users.map((user) => {
				usersArray.push({
					value: user.id,
					id: user.id,
					displayName: `${user.FirstName + ' ' + user.LastName}`,
					Email: user.Email,
					Phone: user.Phone,
				})
			})
			setUsers(usersArray)
		}
		GetUsers()
	}, [])

	return (
		<form
			id={formData ? formData.id : 'NewClientForm'}
			name='Clients'
		>
			<h2>{formData ? `Client Form` : `New Client Form`}</h2>
			<div className={styles.Container}>
				<Input
					Id='Id'
					Label='Client Id'
					Placeholder='Example: FUMCCH'
					Default={formData ? formData.id : ''}
					Icon='Id'
				/>
				<Input
					Id='Client'
					Label='Company Name'
					Placeholder='Example: Church Hill First United Methodist'
					Default={formData ? formData.Client : ''}
					Icon='Client'
				/>
				<Input
					Id='AnnualCharge'
					Label='Annual Charge'
					Placeholder='Amount Charged Annually'
					Default={formData ? formData.AnnualCharge : ''}
					Icon='Dollar'
				/>
				<Input
					Id='Since'
					Label='Member Since'
					Placeholder='Date Client Started'
					Default={
						formData.Since
							? formData.Since.toDate().toISOString().split('T')[0]
							: ''
					}
					Icon='Date'
				/>
				<Dropdown
					Name='Contact'
					Default={formData ? formData.Contact : ''}
					Options={users}
					ShowLabel={true}
					Icon='Person'
				/>
			</div>
		</form>
	)
}

export default Client
