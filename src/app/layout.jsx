import { Roboto_Mono } from 'next/font/google';
import Header from './header/layout';
import './globals.css';

const RobotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata = {
	title: 'Jordon Osborne',
	description:
		'This is a porfolio website showcases my skills from the 9 years working with Eastman Chemical Company, as well as the personal development I have made in HTML, CSS, and JavaScript.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' data-mode='dark' className={RobotoMono.className}>
			<body className='px-gutter dark:bg-dark dark:text-light'>
				<Header />
				{children}
			</body>
		</html>
	);
}
