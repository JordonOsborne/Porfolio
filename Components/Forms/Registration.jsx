import styles from '../../styles/SignIn.module.scss'
import { useState } from 'react'
import { MdEmail, MdAccountCircle } from 'react-icons/md'
import { FaKey, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { NewUserIsValid, RegisterWithEmail } from '../../Utilities/Form'

export default function Registration() {
	const [showPassword, setShowPassword] = useState(false)

	// SUBMIT THE FORM AND SIGN-IN USER
	const onSubmit = async (e) => {
		e.preventDefault()
		if (NewUserIsValid(FirstName, LastName, Password, PasswordConfirmation)) {
			await RegisterWithEmail(FirstName, LastName, Phone, Email, Password)
		}
	}

	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
		>
			<div>
				<label htmlFor='FirstName'>First Name</label>
				<div className={styles.inputDiv}>
					<MdAccountCircle className={styles.Icon} />
					<input
						type='text'
						title='First Name'
						id='FirstName'
						name='FirstName'
						placeholder='First Name'
					/>
				</div>
			</div>
			<div>
				<label htmlFor='Last Name'>Last Name</label>
				<div className={styles.inputDiv}>
					<MdAccountCircle className={styles.Icon} />
					<input
						type='text'
						title='Last Name'
						id='LastName'
						name='Last Name'
						placeholder='Last Name'
					/>
				</div>
			</div>
			<div>
				<label htmlFor='Phone Number'>Phone</label>
				<div className={styles.inputDiv}>
					<FaPhoneAlt className={styles.Icon} />
					<input
						type='phone'
						title='Phone'
						id='Phone'
						name='Phone'
						placeholder='(###) ###-####'
					/>
				</div>
			</div>
			<div>
				<label htmlFor='Email'>Email</label>
				<div className={styles.inputDiv}>
					<MdEmail className={styles.Icon} />
					<input
						type='email'
						title='Email'
						id='Email'
						name='Email'
						placeholder='Enter e-mail address'
					/>
				</div>
			</div>
			<div>
				<label htmlFor='Password'>Password</label>
				<div className={styles.inputDiv}>
					<FaKey className={styles.Icon} />
					<input
						type={showPassword ? 'text' : 'password'}
						title='Password'
						id='Password'
						name='Password'
						placeholder='Must be 8-25 characters'
					/>
					{showPassword ? (
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
					)}
				</div>
			</div>
			<div>
				<label htmlFor='PasswordConfirmation'>Confirm Password</label>
				<div className={styles.inputDiv}>
					<FaKey className={styles.Icon} />
					<input
						type={showPassword ? 'text' : 'password'}
						title='Password'
						id='PasswordConfirmation'
						name='PasswordConfirmation'
						placeholder='Confirm Password'
					/>
				</div>
			</div>
			<button>Register</button>
		</form>
	)
}