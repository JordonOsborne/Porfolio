import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import Dropdown from '../../Components/Reusable/Dropdown'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

function Communication() {
	const { formData, GetData } = useContext(FirebaseAPI)
	const [users, setUsers] = useState([])

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
			id={formData ? formData.id : 'NewCommunicationForm'}
			name='Communication'
		>
			<h2>{formData ? `Communication Form` : `New Communication Form`}</h2>
			<div className={styles.Container}>
				<Input
					Id='Submitted'
					Label='Date'
					Default={formData?.Submitted}
					Icon='Date'
				/>
				<Input
					Id='Subject'
					Label='Subject'
					Default={formData?.Subject}
					Icon='Text'
				/>
				<Input
					Id='Body'
					Label='Body'
					Default={formData?.Body}
					Icon='Text'
				/>
			</div>
		</form>
	)
}

export default Communication
