import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Jordon Osborne',
	description:
		'This is a porfolio website showcases my skills from the 9 years working with Eastman Chemical Company, as well as the personal development I have made in HTML, CSS, and JavaScript.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
