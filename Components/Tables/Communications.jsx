import styles from '../../styles/Admin.module.scss'
import CommunicationData from './CommunicationData'
import Messenger from '../Forms/Messenger'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Communications() {
	const { data } = useContext(FirebaseAPI)

	const Subjects = Array.from(
		new Set(data.map((communication) => communication.Subject))
	)

	return (
		<div className={styles.Communication}>
			<div>
				{Subjects.map((type) => {
					return (
						<div key={type}>
							<h3>{type}</h3>
							<CommunicationData type={type} />
						</div>
					)
				})}
			</div>
			<Messenger />
		</div>
	)
}
export default Communications
