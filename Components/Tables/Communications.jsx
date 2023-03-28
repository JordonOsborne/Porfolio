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
		<>
			{Subjects.map((type) => {
				return (
					<div key={type}>
						<h3>{type}</h3>
						<CommunicationData type={type} />
					</div>
				)
			})}
			<Messenger />
		</>
	)
}
export default Communications
