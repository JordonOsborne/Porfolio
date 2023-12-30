'use client'
import { createContext, useState } from 'react'
import { auth, db } from '../firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import {
	signInWithEmailAndPassword,
	onIdTokenChanged,
	updatePassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(auth?.currentUser)
	const [authFlag, setAuthFlag] = useState(true)

	onIdTokenChanged(auth, async (user) => {
		if (authFlag) {
			setAuthFlag(false)
			if (user) {
				try {
					const dbUser = await getUserData(auth.currentUser.uid)
					const data = {
						uid: auth.currentUser.uid,
						name: auth.currentUser.displayName,
						imageURL: auth.currentUser.photoURL,
						company: dbUser.company,
						email: auth.currentUser.email,
						phone: dbUser.Phone,
						firstName: dbUser.firstName,
						lastName: dbUser.lastName,
						theme: dbUser?.theme ? dbUser.theme : 'Dark',
						created: dbUser.created,
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

	// LOGIN USER
	const LoginUser = async (credentials) => {
		const { email, password } = credentials
		const userAuth = await signInWithEmailAndPassword(auth, email, password)
		const user = await getUserData(userAuth.currentUser.uid)
		if (!user?.theme) {
			setUser({ ...user, theme: 'Dark' })
		} else {
			setUser(user)
		}
	}

	// SWITCH USER'S THEME
	const SwitchTheme = () => {
		if (user.theme == 'Dark') {
			document.documentElement.setAttribute('data-mode', 'light')
			setUser({ ...user, theme: 'Light' })
		} else {
			document.documentElement.setAttribute('data-mode', 'dark')
			setUser({ ...user, theme: 'Dark' })
		}
	}

	// UPDATE PASSWORD (ALREADY LOGGED IN)
	const UpdatePassword = async (NewPassword) => {
		let isUpdated = false
		let Reason
		if (NewPassword.length < 8 || NewPassword.length > 25) {
			return { isUpdated: false, Reason: 'Bad Password' }
		}
		try {
			await updatePassword(auth.currentUser, NewPassword)
			isUpdated = true
		} catch (error) {
			if (error.code.includes('requires-recent-login')) {
				Reason = 'Re-Authentication'
			} else {
				Reason = error.code
				console.log(error.code)
			}
		}
		return { isUpdated, Reason }
	}

	// SEND PASSWORD RESET
	const ResetPassword = async () => {
		console.log('Sending Password Reset Email to ', user.email)
		try {
			await sendPasswordResetEmail(auth, user.email)
		} catch (error) {
			console.log('Email Failed to Send: ', error.message)
		}
	}

	// GET USER DATA FROM DATABASE
	const getUserData = async (uid) => {
		const docRef = doc(db, 'Users', uid)
		const dbUser = await getDoc(docRef)
		const data = dbUser.data()
		return data
	}

	// SIGN USER OUT
	const LogOut = async () => {
		try {
			await signOut(auth)
			setUser(null)
			console.log('Successful Logout')
		} catch (error) {
			console.log('Error:', error.message)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				LoginUser,
				SwitchTheme,
				UpdatePassword,
				ResetPassword,
				LogOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
