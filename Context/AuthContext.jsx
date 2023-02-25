import { createContext, useState } from 'react'
import { auth, db } from '../firebase.config'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import {
	FormIsValid,
	GetPhoneNumber,
	ToastError,
	ToastSuccess,
} from '../Utilities/Form'
import {
	onIdTokenChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateEmail,
	updateProfile,
} from 'firebase/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(auth.currentUser)
	const [authFlag, setAuthFlag] = useState(true)

	onIdTokenChanged(auth, async (user) => {
		if (authFlag) {
			setAuthFlag(false)
			if (user) {
				try {
					const dbUser = await getUserData(auth.currentUser.uid)
					const data = {
						uid: auth.currentUser.uid,
						displayName: auth.currentUser.displayName,
						PhotoURL: auth.currentUser.photoURL,
						Email: auth.currentUser.email,
						Phone: dbUser.Phone,
						FirstName: dbUser.FirstName,
						LastName: dbUser.LastName,
						Created: dbUser.Created,
						isAdmin: dbUser?.isAdmin,
					}
					setUser(data)
				} catch (error) {
					console.log('Error:', error.message)
				}
			} else {
				setUser(null)
			}
		}
	})

	// ATTEMPT TO REGISTER NEW USER
	const RegisterWithEmail = async (
		FirstName,
		LastName,
		Phone,
		Email,
		Password
	) => {
		const requirements = [FirstName, LastName, Email, Password]
		if (!FormIsValid(requirements)) {
			return
		}
		try {
			const fullName = FirstName.value.trim() + ' ' + LastName.value.trim()
			if (!Password) {
				Password.value = fullName.trim()
			}
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				Email.value,
				Password.value
			)
			const user = userCredential.user
			updateProfile(auth.currentUser, {
				displayName: fullName,
				phoneNumber: GetPhoneNumber(Phone.value),
			})
			RegistrationSuccess(user, FirstName, LastName, Phone, Email, Password)
			return true
		} catch (error) {
			console.log(error.message)
			if (error.message.includes('auth/email-already-in-use')) {
				ToastError('User already exist. Please use Sign In.')
			} else {
				ToastError('Sign-In Failed!')
			}
			return false
		}
	}

	// ATTEMPT SIGN IN TO FIREBASE/FIRESTORE
	const SignInWithEmail = async (Email, Password) => {
		const requirements = [Email, Password]
		if (!FormIsValid(requirements)) {
			return
		}
		try {
			const password = Password.value.trim()
			const userCredential = await signInWithEmailAndPassword(
				auth,
				Email.value,
				password
			)
			const user = userCredential.user
			SignInSuccess(user)
			return true
		} catch (error) {
			console.log(error.message)
			ToastError('Sign-In Failed!')
			return false
		}
	}

	// REGISTRATION SUCCESS - SAVE TO DATABASE
	const RegistrationSuccess = async (
		user,
		FirstName,
		LastName,
		Phone,
		Email
	) => {
		const formUser = {
			Created: serverTimestamp(),
			FirstName: FirstName.value,
			LastName: LastName.value,
			Phone: GetPhoneNumber(Phone.value),
			Email: Email.value,
			isAdmin: false,
		}
		await setDoc(doc(db, 'Users', user.uid), formUser)
		auth.currentUser.getIdToken(true)
	}

	// SIGN IN SUCCESS - UPDATE LAST SIGN IN DATE/TIME
	const SignInSuccess = (user) => {
		ToastSuccess('Welcome Back ' + user.displayName + '!')
	}

	// UPDATE PROFILE INFORMATION
	const UpdateProfile = async (user, FirstName, LastName, Phone, Email) => {
		const fullName = FirstName.value.trim() + ' ' + LastName.value.trim()
		try {
			if (Email.value !== user.Email) {
				await updateEmail(auth.currentUser, Email.value)
			}
			await updateProfile(auth.currentUser, {
				displayName: fullName,
				phoneNumber: GetPhoneNumber(Phone.value),
			})
			const formUser = {
				Created: user.Created,
				FirstName: FirstName.value,
				LastName: LastName.value,
				Phone: GetPhoneNumber(Phone.value),
				Email: Email.value,
				isAdmin: user.isAdmin,
				Updated: serverTimestamp(),
			}
			user = await setDoc(doc(db, 'Users', user.uid), formUser)
			ToastSuccess('Profile Updated!')
			console.log('Database Updated!')
			return user
		} catch (error) {
			if (error.message.includes('auth/requires-recent-login')) {
				ToastError('Re-Authentication Required')
			} else {
				console.log(error.message)
			}
		}
	}

	// GET USER DATA FROM DATABASE
	const getUserData = async (uid) => {
		const docRef = doc(db, 'Users', uid)
		const dbUser = await getDoc(docRef)
		const data = dbUser.data()
		return data
	}

	const NewUserIsValid = (
		FirstName,
		LastName,
		Password,
		PasswordConfirmation
	) => {
		let errors = []
		if (FirstName.value == '' || LastName.value == '') {
			errors.push({
				Code: 'Error',
				Message: 'First and Last Name are required.',
			})
		}
		if (Password.value !== PasswordConfirmation.value) {
			errors.push({
				Code: 'Error',
				Message: 'Passwords do not match.',
			})
		}
		if (Password.value.length < 8 || Password.value.length > 25) {
			errors.push({
				Code: 'Error',
				Message: 'Password must be 8-25 characters.',
			})
		}
		if (errors.length === 0) {
			return true
		} else {
			errors.forEach((error) => {
				ToastError(error.Message)
				return false
			})
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				NewUserIsValid,
				RegisterWithEmail,
				SignInWithEmail,
				UpdateProfile,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
