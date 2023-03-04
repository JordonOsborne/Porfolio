import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { MdSave, MdDelete, MdOutlineExitToApp } from 'react-icons/md'
import { useContext } from 'react'

function Actions() {
	const {
		table,
		formData,
		setFormUpdates,
		SubmitForm,
		DeleteDoc,
		setShowForm,
	} = useContext(FirebaseAPI)

	return (
		<div className={styles.ActionMenu}>
			<div>
				<MdSave
					onClick={() => SubmitForm()}
					title='Save Form'
				/>
				{formData && <MdDelete onClick={() => DeleteDoc(table, formData.id)} />}{' '}
			</div>
			<MdOutlineExitToApp
				onClick={() => {
					setShowForm(false)
					setFormUpdates({})
				}}
				title='Close Form'
			/>
		</div>
	)
}

export default Actions
