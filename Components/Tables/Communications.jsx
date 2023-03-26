import styles from '../../styles/Admin.module.scss'
import CommunicationData from './CommunicationData'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Communications() {
	const { data } = useContext(FirebaseAPI)
	const { user } = useContext(AuthContext)

	const CompanyFilter = data.filter((communication) => {
		communication?.Company?.id === user?.Company?.id
	})

	const Subjects = Array.from(
		new Set(data.map((communication) => communication.Subject))
	)

	return (
		<>
			{Subjects.map((type) => {
				return (
					<div key={type}>
						<h3>{type}</h3>
						<CommunicationData type={type} />
					</div>
				)
			})}
		</>
	)
}
export default Communications
