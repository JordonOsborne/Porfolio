import Header from '../Components/Header'
import styles from '../styles/SignIn.module.scss'
import { useState, useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import AuthContext from '../Context/AuthContext'
import SignInForm from '../Components/Forms/SignIn'
import Registration from '../Components/Forms/Registration'
import { useRouter } from 'next/router'

export default function SignIn() {
	const router = useRouter()
	const { user } = useContext(AuthContext)
	const [newUser, setNewUser] = useState(false)

	useEffect(() => {
		if (router.query.Register === 'true') {
			console.log('Registration Form Selected')
			setNewUser(true)
		}
	}, [])

	return (
		<div id='Page'>
			<ToastContainer />
			<Header />
			<div className={styles.center}>
				<h1>Welcome {!newUser && 'back'} to </h1>
				<img
					src='/img/Logo_white.svg'
					alt='JordonOsborne.dev Logo'
				/>

				{/* USER ALREADY SIGNED IN */}
				{user && !router.query.Register && (
					<div className={styles.User}>
						{user.displayName} is already signed in.
					</div>
				)}

				{/* SIGN IN FORM */}
				{!user && !newUser && (
					<>
						<SignInForm />
						<div>
							Not a client yet?
							<a
								className={styles.SignUp}
								onClick={(e) => {
									setNewUser(!newUser)
								}}
							>
								{' '}
								Create a Sign In
							</a>{' '}
							and get in contact.
						</div>
					</>
				)}

				{/* NEW USER REGISTRATION FORM */}
				{(!user || router.query.Register) && newUser && (
					<>
						<Registration />
						{!router.query.Register && (
							<div>
								Wait I am already a client.
								<a
									className={styles.SignUp}
									onClick={(e) => {
										setNewUser(!newUser)
									}}
								>
									{' '}
									Go back to Sign In
								</a>{' '}
								and get in contact.
							</div>
						)}
					</>
				)}
			</div>
		</div>
	)
}
