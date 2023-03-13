import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import RichTextInput from '../Reusable/RichTextInput'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import { Timestamp } from 'firebase/firestore'

function Communication() {
	const { user } = useContext(AuthContext)
	const { formData, GetData } = useContext(FirebaseAPI)
	const [users, setUsers] = useState([])
	const [admin, setAdmin] = useState([])
	const today = Timestamp.fromDate(new Date())

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
					isAdmin: user.isAdmin,
				})
			})
			setAdmin(usersArray.find((option) => option.isAdmin))
			setUsers(usersArray)
		}
		GetUsers()
	}, [])

	return (
		<form
			id={formData ? formData.id : 'NewCommunication'}
			name='Communication'
		>
			<h2>{formData ? `Communication Form` : `New Communication Form`}</h2>
			<div className={styles.Container}>
				<Input
					Id='Submitted'
					Label='Date'
					Default={formData ? formData?.Submitted : today}
					Icon='Date'
					ReadOnly={true}
				/>
				<Input
					Id='Subject'
					Label='Subject'
					Default={formData?.Subject}
					Icon='Text'
				/>
				<Dropdown
					Id='SendTo'
					Label='Send To'
					Options={users}
					DisplayField='displayName'
					ShowLabel={true}
					Default={user.isAdmin ? formData?.SendTo : admin}
					Icon='Person'
					ReadOnly={!user.isAdmin}
				/>
				<RichTextInput
					Id='Body'
					Label='Body'
					Default={formData?.Body}
				/>
			</div>
		</form>
	)
}

export default Communication
