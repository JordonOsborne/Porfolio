import styles from '../../styles/Panel.module.scss'
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
					className={styles.Save}
					title='Save Form'
					onClick={() => SubmitForm()}
				/>
				{formData && (
					<MdDelete
						className={styles.Delete}
						title='Delete Item'
						onClick={() => DeleteDoc(table, formData.id)}
					/>
				)}{' '}
			</div>
			<MdOutlineExitToApp
				className={styles.Close}
				title='Close Form'
				onClick={() => {
					setShowForm(false)
					setFormUpdates({})
				}}
			/>
		</div>
	)
}

export default Actions
