import { createContext, useState } from 'react'
import { auth, db } from '../firebase.config'
import { onIdTokenChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

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
						Email: auth.currentUser.email,
						Phone: dbUser.Phone,
						FirstName: dbUser.FirstName,
						LastName: dbUser.LastName,
						Created: auth.currentUser.metadata.creationTime,
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

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

const getUserData = async (uid) => {
	const docRef = doc(db, 'Users', uid)
	const dbUser = await getDoc(docRef)
	const data = dbUser.data()
	return data
}

export default AuthContext
