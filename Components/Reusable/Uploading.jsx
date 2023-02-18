import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Uploading(Id) {
	const { percent } = useContext(FirebaseAPI)
	return (
		<>
			<label htmlFor={Id}>Uploading . . .</label>
			<progress
				id={Id}
				value={percent}
				max='100'
			>{`${percent} % Complete`}</progress>
		</>
	)
}

export default Uploading
