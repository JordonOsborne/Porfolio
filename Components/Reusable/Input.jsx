import styles from '../../styles/Forms.module.scss'
import { useContext } from 'react'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { MdEmail, MdAccountCircle } from 'react-icons/md'
import { FaKey, FaPhoneAlt, FaCode } from 'react-icons/fa'
import {
	AiOutlineEye,
	AiOutlineEyeInvisible,
	AiFillDollarCircle,
} from 'react-icons/ai'
import { BsShieldLockFill } from 'react-icons/bs'
import { GrOrganization } from 'react-icons/gr'
import { MdDateRange } from 'react-icons/md'
import { BiText, BiLink } from 'react-icons/bi'

function Input({
	Id,
	Label,
	Placeholder,
	Default,
	Icon,
	ReadOnly,
	Calc,
	Required,
}) {
	const { InputUpdates } = useContext(FirebaseAPI)
	const DatePicker = (e) => {
		try {
			e.target.nextSibling.showPicker()
		} catch (error) {
			e.target.parentElement.nextSibling.showPicker()
		}
	}
	const setIcon = (Icon) => {
		switch (Icon) {
			case 'Person':
				return <MdAccountCircle className={styles.Icon} />
			case 'Email':
				return <MdEmail className={styles.Icon} />
			case 'Phone':
				return <FaPhoneAlt className={styles.Icon} />
			case 'Id':
				return <BsShieldLockFill className={styles.Icon} />
			case 'Client':
				return <GrOrganization className={styles.Icon} />
			case 'Code':
				return <FaCode className={styles.Icon} />
			case 'URL':
				return <BiLink className={styles.Icon} />
			case 'Key':
				return <FaKey className={styles.Icon} />
			case 'Date':
				return (
					<MdDateRange
						className={`${styles.Icon} ${styles.Date}`}
						onClick={(e) => DatePicker(e)}
					/>
				)
			case 'Dollar':
				return <AiFillDollarCircle className={styles.Icon} />
			default:
				return <BiText className={styles.Icon} />
		}
	}
	const setType = (Id) => {
		switch (Id) {
			case 'Email':
				return 'email'
			case 'Phone':
				return 'phone'
			case 'URL':
				return 'url'
			default:
				switch (Icon) {
					case 'Date':
						return 'date'
					case 'Dollar':
						return 'number'
					default:
						return 'text'
				}
		}
	}

	return (
		<>
			{ReadOnly || Calc ? (
				<div className={styles.viewDiv}>
					{setIcon(Icon)}
					<div
						id={Id}
						data-calc={Calc}
					>
						{Default && Icon === 'Date'
							? Default?.toDate().toISOString().split('T')[0]
							: Default}
					</div>
				</div>
			) : (
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
							defaultValue={
								Default && Icon === 'Date'
									? Default.toDate().toISOString().split('T')[0]
									: Default
							}
							value={Default}
							required={Required}
							onChange={(e) => InputUpdates(e)}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Input
