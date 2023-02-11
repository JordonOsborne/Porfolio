import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { MdSave, MdOutlineExitToApp } from 'react-icons/md'
import { FormIsValid } from '../../Utilities/Form'
import { useContext } from 'react'
import { Timestamp } from 'firebase/firestore'

function Actions({ CloseForm, Form }) {
	const { SaveForm, ConvertUTC } = useContext(FirebaseAPI)

	const SubmitForm = async (Form) => {
		const allFields = Array.from(Form.elements)
		GetFormData()
		if (FormIsValid(allFields)) {
			const formData = GetFormData()
			const success = await SaveForm(Form.name, formData.Id, formData.Data)
			console.log(success)
			CloseForm()
			return formData
		} else {
			console.log(false)
			return false
		}
	}

	const GetFormData = () => {
		let data, id
		Array.from(Form.elements).forEach((input) => {
			if (input.nodeName === 'INPUT' && input.id !== 'Id') {
				// CHECK FOR DROPDOWN OBJECT VALUES
				if (input.dataset.value === undefined) {
					switch (input.type) {
						case 'date':
							const date = ConvertUTC(input.valueAsDate)
							data = {
								...data,
								[input.id]: Timestamp.fromDate(date),
							}
							break
						default:
							data = { ...data, [input.id]: input.value }
							break
					}
				} else {
					const obj = JSON.parse(input.dataset.value)
					obj.id = obj.value
					delete obj.value
					data = { ...data, [input.id]: obj }
				}
			} else {
				if (input.id !== undefined) {
					id = input.value
				} else {
					id = null
				}
			}
		})
		return { Id: id, Data: data }
	}

	return (
		<div className={styles.ActionMenu}>
			<div>
				<MdSave
					onClick={() => SubmitForm(Form)}
					title='Save Form'
				/>
			</div>
			<MdOutlineExitToApp
				onClick={() => CloseForm()}
				title='Close Form'
			/>
		</div>
	)
}

export default Actions
