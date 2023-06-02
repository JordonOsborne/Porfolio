import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { MdEmail, MdAccountCircle } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrOrganization } from 'react-icons/gr'
import { useContext } from 'react'

function Users() {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const EditForm = async (id) => {
		await GetDoc('Users', id)
		setShowForm(true)
	}
	return (
		<div
			id={styles.Users}
			className={styles.Grid}
		>
			{data.map((user) => (
				<div
					key={user.id}
					id={user.id}
					className={styles.Card}
					onClick={() => EditForm(user.id)}
				>
					{user?.PhotoURL ? (
						<img
							src={user.PhotoURL}
							alt={`${user.FirstName} ${user.LastName} Profile Image`}
							height='100px'
						/>
					) : (
						<MdAccountCircle />
					)}
					<div>
						<h3>{user.FirstName + ' ' + user.LastName}</h3>
						<p>
							<GrOrganization />
							{user?.isAdmin ? 'JOsborne.dev' : user?.Company?.Company}
						</p>
						<p>
							<MdEmail />
							{user.Email}
						</p>
						<p>
							<FaPhoneAlt />
							{user.Phone}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}
export default Users
