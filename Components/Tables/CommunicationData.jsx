import styles from '../../styles/Admin.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function CommunicationData({ type }) {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)

	const FilteredData = () => {
		return data.filter((communication) => communication.Form === type)
	}

	const EditForm = async (id) => {
		await GetDoc('Communications', id)
		setShowForm(true)
	}

	return (
		<div>
			{FilteredData().map((item) => {
				return (
					<div
						key={item.id}
						onClick={() => EditForm(item.id)}
					>
						<h5>{item?.Contact?.displayName}</h5>
						<h5>{item?.Subject}</h5>
						<div
							className={styles.rteHTML}
							dangerouslySetInnerHTML={{
								__html: item?.Body,
							}}
						></div>
					</div>
				)
			})}
		</div>
	)
}

export default CommunicationData
