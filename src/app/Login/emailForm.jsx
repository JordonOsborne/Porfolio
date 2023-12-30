'use client'
import {
	Form,
	TextField,
	Label,
	Input,
	FieldError,
	Button,
} from 'react-aria-components'
import AuthContext from '../../../context/auth'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export default function EmailForm({ className }) {
	const router = useRouter()
	const { LoginUser } = useContext(AuthContext)
	const Login = (e) => {
		e.preventDefault()
		let credentials = Object.fromEntries(new FormData(e.currentTarget))
		// Submit to your backend API...
		LoginUser(credentials)
		setTimeout(() => router.push('/'), 3000)
	}

	return (
		<Form className={className} onSubmit={Login}>
			<TextField className='field' name='email' type='email' isRequired>
				<Label>Email</Label>
				<Input />
				<FieldError />
			</TextField>
			<TextField className='field' name='password' type='password' isRequired>
				<Label>Password</Label>
				<Input />
				<FieldError />
			</TextField>
			<Button className='primary' type='submit'>
				Login
			</Button>
		</Form>
	)
}
