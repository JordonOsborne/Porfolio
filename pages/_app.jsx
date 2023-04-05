import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../Context/AuthContext'
import { FirebaseProvider } from '../Context/FirebaseAPI'
import { FirestoreProvider } from '../Context/FirestoreAPI'

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<FirebaseProvider>
				<FirestoreProvider>
					<Component {...pageProps} />
				</FirestoreProvider>
			</FirebaseProvider>
		</AuthProvider>
	)
}

export default MyApp
