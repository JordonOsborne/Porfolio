import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import MultiLine from '../../Components/Reusable/MultiLine'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext, useState } from 'react'

function Communication() {
	const { user } = useContext(AuthContext)
	const { data, formData, formUpdates, SubmitForm, GetDoc } =
		useContext(FirebaseAPI)
	const [changeSubject, setChangeSubject] = useState(false)

	const lastSubject = data[data.length - 1]?.Subject
	const GetLastResponder = () => {
		const messages = data.filter(
			(message) => message?.CreatedBy?.uid !== user.uid
		)
		if (messages.length !== 0) {
			return messages[messages.length - 1]?.CreatedBy
		} else {
			return user
		}
	}
	const lastResponder = GetLastResponder()

	const SendMessage = async (e) => {
		e.preventDefault()
		await SubmitForm()
	}

	return (
		<form
			id={formData ? formData.id : 'NewCommunication'}
			name='Communications'
		>
			<div className={styles.Messenger}>
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
					Visible={false}
				/>
				{changeSubject ? (
					<Input
						Id='Subject'
						Label='Subject'
						Default={lastSubject}
						Calc={lastSubject}
						Required={true}
						Icon='Text'
					/>
				) : (
					<Input
						Id='Subject'
						Label='Subject'
						Default={lastSubject}
						Required={true}
						Icon='Text'
						ReadOnly={!changeSubject}
					/>
				)}
				<Input
					Id='SendTo'
					Calc={JSON.stringify(lastResponder)}
					Required={true}
					ReadOnly={true}
					Visible={false}
				/>
				<MultiLine
					Id='Body'
					Required={true}
					Default={null}
					Placeholder='Enter your message here . . .'
				/>
			</div>
			<button onClick={(e) => SendMessage(e)}>Send</button>
			<button
				onClick={(e) => {
					e.preventDefault()
					setChangeSubject(!changeSubject)
				}}
			>
				{changeSubject ? 'Hide Subject' : 'Change Subject'}
			</button>
		</form>
	)
}

export default Communication
