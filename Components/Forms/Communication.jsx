import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import RichTextInput from '../Reusable/RichTextInput'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

function Communication() {
	const { user } = useContext(AuthContext)
	const { formData, GetData, formUpdates } = useContext(FirebaseAPI)
	const [users, setUsers] = useState([])
	const [admin, setAdmin] = useState([])

	useEffect(() => {
		const GetUsers = async () => {
			const userFilter = `isAdmin != ${false}`
			const Users = await GetData('Users', userFilter, null, true)
			let usersArray = []
			Users.map((user) => {
				usersArray.push({
					id: user.id,
					displayName: `${user.FirstName + ' ' + user.LastName}`,
					Company: user.Company,
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
			name='Communications'
		>
			<h2>{formData ? `Communication Form` : `New Communication Form`}</h2>
			<div className={styles.Container}>
				<Input
					Id='Company'
					Label='Company'
					Calc={
						formData?.Company
							? formData?.Company
							: formUpdates?.SendTo?.Company?.id
					}
					Required={true}
					Icon='Client'
					ReadOnly={true}
				/>
				<Input
					Id='Subject'
					Label='Subject'
					Default={user.isAdmin ? 'Testing' : formData?.Subject}
					Calc={user.isAdmin ? 'Testing' : undefined}
					Required={true}
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
					Required={true}
					ReadOnly={!user.isAdmin}
				/>
				<RichTextInput
					Id='Body'
					Label='Body'
					Required={true}
					Default={formData?.Body}
				/>
			</div>
		</form>
	)
}

export default Communication
