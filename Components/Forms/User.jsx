import styles from '../../styles/Forms.module.scss'
import Input from '../Reusable/Input'
import Dropdown from '../Reusable/Dropdown'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import { FaKey } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function User({ data }) {
	const { GetData } = useContext(FirebaseAPI)
	const [showPassword, setShowPassword] = useState(false)
	const [clients, setClients] = useState([])

	useEffect(() => {
		const GetClients = async () => {
			const Clients = await GetData('Clients', true)
			let clientsArray = []
			Clients.map((client) => {
				clientsArray.push({
					value: client.id,
					displayName: client.Client,
					Since: client.Since,
				})
			})
			setClients(clientsArray)
		}
		GetClients()
	}, [])

	return (
		<form
			id='UserForm'
			name='Users'
		>
			<h2>{data ? `User Form` : `New User Form`}</h2>
			<div className={styles.Container}>
				<Dropdown
					Name='Client'
					Default={data ? data.Contact : ''}
					Options={clients}
					ShowLabel={true}
					Icon='Client'
				/>
				<Input
					Id='FirstName'
					Label='First Name'
					Default={data ? data.Id : ''}
					Icon='Person'
				/>
				<Input
					Id='LastName'
					Label='Last Name'
					Default={data ? data.Id : ''}
					Icon='Person'
				/>
				<Input
					Id='Phone'
					Label='Phone Number'
					Default={data ? data.Id : ''}
					Icon='Phone'
				/>
				<Input
					Id='Email'
					Label='Email'
					Placeholder='Enter e-mail address'
					Default={data ? data.Id : ''}
					Icon='Email'
				/>
				<Input
					Id='Password'
					Label='Password'
					Placeholder='Must be 8-25 characters'
					Default={data ? data.Id : ''}
					Icon='Password'
				/>
				<div>
					<label htmlFor='Password'>Password</label>
					<div className={styles.inputDiv}>
						<FaKey className={styles.Icon} />
						<input
							type={showPassword ? 'text' : 'password'}
							title='Password'
							id='Password'
							name='Password'
							placeholder='Must be 8-25 characters'
						/>
						{showPassword ? (
							<AiOutlineEyeInvisible
								className={styles.ShowPassword}
								title='Hide Password'
								onClick={() => {
									setShowPassword(!showPassword)
								}}
							/>
						) : (
							<AiOutlineEye
								className={styles.ShowPassword}
								title='Show Password'
								onClick={() => {
									setShowPassword(!showPassword)
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</form>
	)
}
