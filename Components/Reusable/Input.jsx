import styles from '../../styles/Forms.module.scss'
import { useState, useContext } from 'react'
import FirebaseAPI from '../../Context/FirebaseAPI'
import {
	MdEmail,
	MdAccountCircle,
	MdNumbers,
	MdDateRange,
} from 'react-icons/md'
import { FaKey, FaPhoneAlt, FaCode } from 'react-icons/fa'
import {
	AiOutlineEye,
	AiOutlineEyeInvisible,
	AiFillDollarCircle,
	AiFillStar,
} from 'react-icons/ai'
import { BsShieldLockFill } from 'react-icons/bs'
import { GrOrganization } from 'react-icons/gr'
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
	Visible,
}) {
	const { InputUpdates } = useContext(FirebaseAPI)
	const [value, setValue] = useState(Default)
	const [showPassword, setShowPassword] = useState(false)
	const DatePicker = (e) => {
		try {
			e.target.nextSibling.showPicker()
		} catch (error) {
			e.target.parentElement.nextSibling.showPicker()
		}
	}
	const OnChange = (e) => {
		const update = InputUpdates(e)[Id]
		setValue(update)
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
			case 'Password':
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
			case 'Number':
				return <MdNumbers className={styles.Icon} />
			case 'Rating':
				return <AiFillStar className={styles.Icon} />
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
					case 'Number':
						return 'number'
					case 'Rating':
						return 'number'
					case 'Password':
						return showPassword ? 'text' : 'password'
					default:
						return 'text'
				}
		}
	}

	return (
		<>
			{ReadOnly || Calc ? (
				<div className={!Visible ? styles.hideDiv : styles.viewDiv}>
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
							title={Label ? Label : Id}
							placeholder={Placeholder}
							value={
								Icon === 'Date'
									? value?.toDate().toISOString().split('T')[0]
									: value
							}
							required={Required}
							onChange={(e) => OnChange(e)}
						/>
						{Icon === 'Password' &&
							(showPassword ? (
								<AiOutlineEyeInvisible
									className={styles.ShowPassword}
									title='Hide Password'
									onClick={() => {
										setShowPassword(!showPassword)
									}}
								/>
							) : (
								<AiOutlineEye
									className={styles.ShowPassword}
									title='Show Password'
									onClick={() => {
										setShowPassword(!showPassword)
									}}
								/>
							))}
					</div>
				</div>
			)}
		</>
	)
}

export default Input
