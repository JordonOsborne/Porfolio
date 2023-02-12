import styles from '../../styles/SignIn.module.scss'
import AuthContext from '../../Context/AuthContext'
import { useState, useContext } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRouter } from 'next/router'

export default function SignIn() {
	const { SignInWithEmail } = useContext(AuthContext)
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()

	// SUBMIT THE FORM AND SIGN-IN USER
	const onSubmit = async (e) => {
		e.preventDefault()
		const success = await SignInWithEmail(Email, Password)
		if (success) {
			setTimeout(() => {
				router.replace('/')
			}, 3000)
		}
	}

	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
		>
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
						placeholder='Enter Password'
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
			<button>Sign In</button>
		</form>
	)
}
