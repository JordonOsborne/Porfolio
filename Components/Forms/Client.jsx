import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import Dropdown from '../../Components/Reusable/Dropdown'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

function Client({ data }) {
	const { GetData } = useContext(FirebaseAPI)
	const [users, setUsers] = useState([])

	useEffect(() => {
		const GetUsers = async () => {
			const Users = await GetData('Users', true)
			let usersArray = []
			Users.map((user) => {
				usersArray.push({
					value: user.id,
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
			id='ClientForm'
			name='Clients'
		>
			<h2>{data ? `Client Form` : `New Client Form`}</h2>
			<div className={styles.Container}>
				<Input
					Id='Id'
					Label='Client Id'
					Placeholder='Example: FUMCCH'
					Default={data ? data.Id : ''}
					Icon='Id'
				/>
				<Input
					Id='Client'
					Label='Company Name'
					Placeholder='Example: Church Hill First United Methodist'
					Default={data ? data.Id : ''}
					Icon='Client'
				/>
				<Input
					Id='AnnualCharge'
					Label='Annual Charge'
					Placeholder='Amount Charged Annually'
					Default={data ? data.Id : ''}
					Icon='Dollar'
				/>
				<Input
					Id='Since'
					Label='Member Since'
					Placeholder='Date Client Started'
					Default={data ? data.Id : ''}
					Icon='Date'
				/>
				<Dropdown
					Name='Contact'
					Default={data ? data.Contact : ''}
					Options={users}
					ShowLabel={true}
					Icon='Person'
				/>
			</div>
		</form>
	)
}

export default Client
