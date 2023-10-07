import Head from 'next/head'
import styles from '../styles/Contact.module.scss'
import Header from '../Components/Header'
import InteractiveForms from '../Components/InteractiveForms'
import ContactForm from '../Components/ContactForm'

export default function Contact() {
	return (
		<div id={styles.Contact}>
			<Head>
				<title>Jordon Osborne | Contact</title>
				<meta
					name='description'
					content={`Get in touch with me through the contact page of my portfolio. Let's connect and explore opportunities for collaboration or discuss your project needs.`}
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Header />
			<main>
				<p className={styles.Lead}>
					Have questions or just want to get in touch? Fill out my contact form
					or find me on Linked In. Thank you for giving me the oppurtunity to
					serve you.
				</p>
				<InteractiveForms />
				<ContactForm />
			</main>
		</div>
	)
}
