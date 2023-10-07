import Image from 'next/image'
import styles from '../styles/Contact.module.scss'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { SignInWithEmail, FormSubmission } from '../Utilities/Form'
import { serverTimestamp } from 'firebase/firestore'
import { auth } from '../firebase.config'

export default function ContactForm() {
	// SUBMIT THE FORM AND SIGN-IN USER
	const onSubmit = async (e) => {
		e.preventDefault()
		SignInWithEmail(FirstName, LastName, Phone, Email, Password)
		if (auth.currentUser) {
			const communicationForm = {
				Form: 'Contact',
				FirstName: FirstName.value,
				LastName: LastName.value,
				Subject: Subject.value,
				Body: Body.value,
				Submitted: serverTimestamp(),
			}
			FormSubmission('Contact', communicationForm)
			clearForm()
		}
	}
	const clearForm = () => {
		FirstName.value = ''
		LastName.value = ''
		Email.value = ''
		Phone.value = ''
		Subject.value = ''
		Body.value = ''
		console.log('Form has been reset!')
	}

	// RETURN THE FORM HTML
	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
		>
			<div className={styles.ContactImg}>
				<Image
					src='/Img/Contact.svg'
					alt='Contact Me'
					width='200'
					height='150'
				/>
			</div>
			<div>
				<label htmlFor='FirstName'>First Name</label>
				<input
					type='text'
					title='First Name'
					id='FirstName'
					name='FirstName'
					placeholder='First Name'
				/>
			</div>
			<div>
				<label htmlFor='Last Name'>Last Name</label>
				<input
					type='text'
					title='Last Name'
					id='LastName'
					name='Last Name'
					placeholder='Last Name'
				/>
			</div>
			<div>
				<label htmlFor='Phone Number'>Phone</label>
				<input
					type='phone'
					title='Phone'
					id='Phone'
					name='Phone'
					placeholder='(###) ###-####'
				/>
			</div>
			<div>
				<label htmlFor='Email'>Email</label>
				<input
					type='email'
					title='Email'
					id='Email'
					name='Email'
					placeholder='Enter e-mail address'
				/>
			</div>
			<div className={styles.subject}>
				<label htmlFor='Subject'>Subject</label>
				<input
					type='text'
					title='Subject'
					id='Subject'
					name='Subject'
					placeholder='Enter email subject here . . .'
				/>
			</div>
			<div className={styles.socials}>
				<div className={styles.social}>
					<BsLinkedin />
					Jordon Osborne
				</div>
				<div className={styles.social}>
					<FaPhoneAlt />
					(423) 276-1041
				</div>
				<div className={styles.social}>
					<MdEmail />
					JordonOsborne@outlook.com
				</div>
			</div>
			<div className={styles.body}>
				<textarea
					title='Body'
					id='Body'
					name='Body'
					className={styles.textarea}
					rows='5'
					placeholder='Enter your message here . . .'
				></textarea>
			</div>
			<button>Submit</button>
		</form>
	)
}
