import { toast } from 'react-toastify'
import { db, auth } from '../firebase.config'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateEmail,
	updateProfile,
} from 'firebase/auth'

// FORM VALIDATION FUNCTIONS
export function FormIsValid(requirements) {
	const errors = []
	requirements.forEach((requirement) => {
		let error = InputIsValid(requirement)
		if (error) {
			errors.push(error)
		}
	})
	if (errors.length === 0) {
		return true
	} else {
		errors.forEach((error) => {
			ToastError(error.Message)
		})
		return false
	}
}

export function InputIsValid(input) {
	if (input.value === '') {
		const error = {
			Code: 'Error',
			Message: input.title + ' is required.',
		}
		return error
	}
}

export function NewUserIsValid(
	FirstName,
	LastName,
	Password,
	PasswordConfirmation
) {
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

// ATTEMPT TO REGISTER NEW USER
export async function RegisterWithEmail(
	FirstName,
	LastName,
	Phone,
	Email,
	Password
) {
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
export async function SignInWithEmail(Email, Password) {
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
export async function RegistrationSuccess(
	user,
	FirstName,
	LastName,
	Phone,
	Email
) {
	const formUser = {
		FirstName: FirstName.value,
		LastName: LastName.value,
		Phone: GetPhoneNumber(Phone.value),
		Email: Email.value,
		Created: serverTimestamp(),
	}
	await setDoc(doc(db, 'Users', user.uid), formUser)
}

// SIGN IN SUCCESS - UPDATE LAST SIGN IN DATE/TIME
export async function SignInSuccess(user) {
	ToastSuccess('Welcome Back ' + user.displayName + '!')
}

// UPDATE PROFILE INFORMATION
export async function UpdateProfile(user, FirstName, LastName, Phone, Email) {
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
			FirstName: FirstName.value,
			LastName: LastName.value,
			Phone: GetPhoneNumber(Phone.value),
			Email: Email.value,
			Updated: serverTimestamp(),
		}
		user = await setDoc(doc(db, 'Users', user.uid), formUser)
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

// FORM SUBMISSIONS TO FIREBASE
export async function FormSubmission(formName, data) {
	console.log('Saving Form Entry to Firebase.')
	switch (formName) {
		case 'Contact':
			await setDoc(doc(db, 'Communications', user.uid), data)
			break
		default:
			console.log('Nothing Saved')
			break
	}
}

// UTILITY FUNCTIONS
export function GetPhoneNumber(PhoneNumber) {
	let cleaned = ('' + PhoneNumber).replace(/\D/g, '')
	let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
	if (match) {
		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
	}
	return null
}
export function ToastError(message) {
	toast.error(message, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: 'colored',
	})
}
export function ToastSuccess(message) {
	toast.success(message, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: 'colored',
	})
}
