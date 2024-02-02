'use client'
import { createContext, useState } from 'react'
import { auth, db } from '../../firebase.config'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
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
						id: auth?.currentUser.uid,
						Name: dbUser.Name,
						PhotoURL: dbUser.PhotoURL,
						Client: dbUser.Client,
						Email: auth?.currentUser.email,
						Phone: dbUser.Phone,
						FirstName: dbUser.FirstName,
						LastName: dbUser.LastName,
						Theme: dbUser?.Theme ? dbUser.Theme : 'Dark',
						Created: dbUser.Created,
						LastLogin: serverTimestamp(),
						isAdmin: dbUser?.isAdmin,
					}
					const docRef = doc(db, 'Users', data.id)
					await setDoc(docRef, data)
					setUser(data)
				} catch (error) {
					console.error('Error:', error.message)
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
		const dbUser = await getUserData(userAuth.user.uid)
		const data = {
			id: userAuth.user.uid,
			Name: dbUser.Name,
			PhotoURL: dbUser.PhotoURL,
			Client: dbUser.Client,
			Email: userAuth.user.email,
			Phone: dbUser.Phone,
			FirstName: dbUser.FirstName,
			LastName: dbUser.LastName,
			Theme: dbUser?.Theme ? dbUser.Theme : 'Dark',
			Created: dbUser.Created,
			LastLogin: serverTimestamp(),
			isAdmin: dbUser?.isAdmin,
		}
		try {
			const docRef = doc(db, 'Users', data.id)
			const userData = await setDoc(docRef, data)
			setUser(userData)
		} catch (error) {
			console.error('User Data Not Saved! - ', error.message)
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
		} catch (error) {
			console.log('Error:', error.message)
		}
	}

	return (
		<AuthContext.Provider
			value={{
				auth,
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
