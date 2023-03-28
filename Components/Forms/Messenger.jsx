import styles from '../../styles/Forms.module.scss'
import Input from '../../Components/Reusable/Input'
import RichTextInput from '../Reusable/RichTextInput'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function Communication() {
	const { user } = useContext(AuthContext)
	const { data, formData, formUpdates, SubmitForm } = useContext(FirebaseAPI)

	const lastSubject = data[data.length - 1].Subject
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
				<Input
					Id='Subject'
					Label='Subject'
					Default={lastSubject}
					Calc={lastSubject}
					Required={true}
					Icon='Text'
				/>
				<Input
					Id='SendTo'
					Calc={JSON.stringify(lastResponder)}
					Required={true}
					ReadOnly={true}
					Visible={false}
				/>
				<RichTextInput
					Id='Body'
					Required={true}
					Default={formData?.Body}
				/>
			</div>
			<div onClick={() => SubmitForm()}>Send</div>
		</form>
	)
}

export default Communication
