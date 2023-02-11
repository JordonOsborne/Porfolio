import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../Context/AuthContext'
import { FirebaseProvider } from '../Context/FirebaseAPI'

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<FirebaseProvider>
				<Component {...pageProps} />
			</FirebaseProvider>
		</AuthProvider>
	)
}

export default MyApp
