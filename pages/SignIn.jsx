import Header from '../Components/Header'
import styles from '../styles/SignIn.module.scss'
import { useState, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import AuthContext from '../Context/AuthContext'
import SignInForm from '../Components/Forms/SignIn'
import Registration from '../Components/Forms/Registration'

export default function SignIn() {
	const [newUser, setNewUser] = useState(false)
	const { user } = useContext(AuthContext)

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
				{user && (
					<div className={styles.User}>
						{user.displayName} is already signed in.
					</div>
				)}

				{/* NEW USER REGISTRATION FORM */}
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

				{/* SIGN IN FORM */}
				{!user && newUser && (
					<>
						<Registration />
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
					</>
				)}
			</div>
		</div>
	)
}
