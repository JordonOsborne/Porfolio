import styles from '../../styles/Admin.module.scss'
import Loading from '../Reusable/Loading'
import FirebaseAPI from '../../Context/FirebaseAPI'
import AuthContext from '../../Context/AuthContext'
import Image from 'next/image'
import { MdAccountCircle } from 'react-icons/md'
import { useContext } from 'react'

function CommunicationData({ type }) {
	const { data, setShowForm, GetDoc } = useContext(FirebaseAPI)
	const { user } = useContext(AuthContext)

	const FilteredData = () => {
		return data.filter((communication) => communication.Subject === type)
	}

	const EditForm = async (id) => {
		await GetDoc('Communications', id)
		setShowForm(true)
	}

	const SendTime = (time) => {
		try {
			time = time.toDate()
		} catch (error) {
			time = new Date()
		}
		const TimeStamp = `${time.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'short',
			day: 'numeric',
		})} ${time.toLocaleTimeString('en-US')}`
		return TimeStamp
	}

	return (
		<div id={styles.Messages}>
			{FilteredData().map((item) => {
				return (
					<div
						key={item.id}
						className={
							item.CreatedBy?.uid === user.uid ? styles.Me : styles.Reply
						}
					>
						<div className={styles.SenderImg}>
							{item?.CreatedBy?.PhotoURL ? (
								<Image
									src={item?.CreatedBy?.PhotoURL}
									alt={item?.CreatedBy?.displayName}
									title={
										item?.CreatedBy?.uid === user?.uid
											? 'You'
											: item?.CreatedBy?.displayName
									}
									width='30px'
									height='30px'
									fill={true}
								/>
							) : (
								<MdAccountCircle
									title={
										item?.CreatedBy?.uid === user?.uid
											? 'You'
											: item?.CreatedBy?.displayName
									}
									width='30px'
									height='30px'
								/>
							)}
						</div>
						<div
							className={styles.message}
							onClick={
								item?.CreatedBy?.uid === user.uid
									? () => EditForm(item.id)
									: undefined
							}
							dangerouslySetInnerHTML={{
								__html: item?.Body,
							}}
						></div>
						<div className={styles.TimeSent}>
							{item?.Created ? (
								SendTime(item.Created)
							) : (
								<Loading size='small' />
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CommunicationData
