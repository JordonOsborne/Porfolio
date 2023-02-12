import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { MdSave, MdDelete, MdOutlineExitToApp } from 'react-icons/md'
import { useContext } from 'react'

function Actions() {
	const { table, form, formData, SubmitForm, DeleteDoc, setShowForm } =
		useContext(FirebaseAPI)

	return (
		<div className={styles.ActionMenu}>
			<div>
				<MdSave
					onClick={() => SubmitForm(form)}
					title='Save Form'
				/>
				{formData && <MdDelete onClick={() => DeleteDoc(table, formData.id)} />}{' '}
			</div>
			<MdOutlineExitToApp
				onClick={() => setShowForm(false)}
				title='Close Form'
			/>
		</div>
	)
}

export default Actions
