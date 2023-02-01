import styles from '../../styles/Forms.module.scss'
import { MdEmail, MdAccountCircle } from 'react-icons/md'
import { FaKey, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function Input({ Id, Label, Placeholder, Default, Icon, ReadOnly }) {
	const setIcon = (Icon) => {
		switch (Icon) {
			case 'Person':
				return <MdAccountCircle className={styles.Icon} />
			case 'Email':
				return <MdEmail className={styles.Icon} />
			case 'Phone':
				return <FaPhoneAlt className={styles.Icon} />
			default:
				break
		}
	}
	const setType = (Id) => {
		switch (Id) {
			case 'Email':
				return 'email'
			case 'Phone':
				return 'phone'
			default:
				return 'text'
		}
	}
	return (
		<>
			{ReadOnly && (
				<div className={styles.viewDiv}>
					{setIcon(Icon)}
					<div>{Default}</div>
				</div>
			)}
			{!ReadOnly && (
				<div className={styles.labelDiv}>
					<label htmlFor={Id}>{Label}</label>
					<div className={styles.inputDiv}>
						{setIcon(Icon)}
						<input
							type={setType(Id)}
							id={Id}
							name={Label}
							title={Label}
							placeholder={Placeholder}
							defaultValue={Default}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Input
