import styles from '../../styles/Admin.module.scss'
import CommunicationData from './CommunicationData'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Communications() {
	const { data } = useContext(FirebaseAPI)
	const Forms = Array.from(
		new Set(data.map((communication) => communication.Form))
	)

	return (
		<>
			{Forms.map((type) => {
				return (
					<div key={type}>
						<h3>{`${type} Forms`}</h3>
						<CommunicationData type={type} />
					</div>
				)
			})}
		</>
	)
}
export default Communications
