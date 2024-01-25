import { Roboto_Mono } from 'next/font/google'
import { AuthProvider } from '../../context/auth'
import { DataProvider } from '../../context/data'
import Header from './header/layout'
import './globals.css'

const RobotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
	title: 'Jordon Osborne',
	description:
		'This is a porfolio website showcases my skills from the 9 years working with Eastman Chemical Company, as well as the personal development I have made in HTML, CSS, and JavaScript.',
}

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<DataProvider>
				<html lang='en' data-mode='dark' className={RobotoMono.className}>
					<body className='px-gutter dark:bg-dark dark:text-light overflow-x-hidden'>
						<Header />
						{children}
					</body>
				</html>
			</DataProvider>
		</AuthProvider>
	)
}
