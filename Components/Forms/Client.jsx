import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import Dropdown from '../../Components/Reusable/Dropdown'
import Checkbox from '../../Components/Reusable/Checkbox'
import Upload from '../../Components/Reusable/Upload'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

function Client() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [users, setUsers] = useState([])
	const allowedTypes = ['image/png, image/jpeg, image/svg']

	useEffect(() => {
		const GetUsers = async () => {
			const Users = await GetData('Users', null, null, true)
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
			<h2>{formData ? formData.id : `New Client Form`}</h2>
			<div className={styles.Container}>
				{formData ? (
					<Upload
						Id='Logo'
						Label='Company Logo'
						Types={allowedTypes}
						Source={formData.Logo}
						filePath={`${formData.id}/_Logo.jpg`}
					/>
				) : (
					<Input
						Id='Id'
						Label='Client Id'
						Placeholder='Example: FUMCCH'
						Default={formData?.id}
						Icon='Id'
						ReadOnly={formData !== null}
					/>
				)}
				<Input
					Id='Client'
					Label='Company Name'
					Placeholder='Example: Church Hill First United Methodist'
					Default={formData?.Client}
					Icon='Client'
				/>
				<Input
					Id='AnnualCharge'
					Label='Annual Charge'
					Placeholder='Amount Charged Annually'
					Default={formData?.AnnualCharge}
					Icon='Dollar'
				/>
				<Input
					Id='Since'
					Label='Member Since'
					Placeholder='Date Client Started'
					Default={formData?.Since}
					Icon='Date'
				/>
				<Dropdown
					Id='Contact'
					Label='Contact'
					Default={formData?.Contact}
					Options={users}
					DisplayField='displayName'
					Icon='Person'
				/>
				<Checkbox
					Id='Active'
					Label='Active'
					Default={formData?.Active}
				/>
			</div>
		</form>
	)
}

export default Client
