import Image from 'next/image'
import Rating from '../../Ratings/rating'
import Review from '../../Ratings/review'
import TextInput from '../Forms/textInput'
import useIsMobile from '../../../utilities/useIsMobile'
import Data from '../../../lib/data-client'
import { useContext, useEffect, useState } from 'react'
import { Form } from 'react-aria-components'
import { formatPhoneNumber } from '../../../utilities/data'

export default function UserForm({ user, setMode }) {
	const isMobile = useIsMobile()
	const { GetDoc, GetData } = useContext(Data)
	const [company, setCompany] = useState()
	const [reviews, setReviews] = useState([])
	const GetCompany = async (id) => {
		const data = await GetDoc('Clients', id)
		setCompany(data)
	}
	const GetReviews = async (user) => {
		const filter = 'CreatedBy == ' + user
		const data = await GetData('Reviews', filter)
		setReviews(data)
	}

	const AvgScore = (reviews) => {
		if (reviews.length === 0) {
			return
		}
		const sum = reviews.reduce((total, next) => total + next.Rating, 0)
		const avg = sum / reviews.length
		return avg
	}

	useEffect(() => {
		const clientId = user.Client
		GetCompany(clientId)
		GetReviews(user.id)
	}, [user])

	const Submit = (e) => {
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.currentTarget))
		const phone = formatPhoneNumber(formData?.Phone)
		const updates = { ...user, ...formData, Phone: phone }
		console.log(updates)
		setMode('view')
	}

	return (
		<>
			<div className='grid grid-cols-2 lg:grid-cols-5 md:gap-2 w-full mt-2'>
				<div className='p-2 flex items-center justify-center col-span-2 lg:col-span-1'>
					<Image
						src={user?.PhotoURL}
						alt={user?.name + ' Image'}
						width='100'
						height='100'
						className='w-24 h-24 rounded-full'
					/>
				</div>
				<Form
					name='User'
					id='UserForm'
					onSubmit={Submit}
					className='mx-auto col-span-4 lg:mx-1'
				>
					<TextInput
						name='FirstName'
						label='First Name:'
						defaultValue={user?.FirstName}
						isRequired
					/>
					<TextInput
						name='LastName'
						label='Last Name:'
						defaultValue={user?.LastName}
						isRequired
					/>
					<TextInput
						name='Title'
						label='Job Title:'
						defaultValue={user?.Title}
					/>
					<TextInput
						name='Phone'
						label='Phone:'
						type='phone'
						inputMode='tel'
						defaultValue={user?.Phone}
					/>
					<TextInput
						name='Email'
						label='Email:'
						type='email'
						defaultValue={user?.Email}
					/>
				</Form>
			</div>
			<hr className='w-10/12 my-4' />
			<section>
				<div className='mx-auto'>
					{company?.Logo && (
						<Image
							src={company?.Logo}
							alt={company?.Client + ' Logo'}
							placeholder='blur'
							blurDataURL='/img/Logo_Blur.png'
							width='800'
							height='100'
							className='mx-auto h-8 w-auto'
						/>
					)}
				</div>
				<h3 className='mx-auto italic text-center text-base lg:text-lg font-light'>
					{company?.name}
				</h3>
				<div className='flex items-center justify-center'>
					<Rating rating={AvgScore(reviews)} size={isMobile ? 'md' : 'lg'} />
				</div>
			</section>
			<section className='py-2 pb-4 w-10/12 mx-auto grid grid-cols-1 gap-4'>
				{reviews.map((review) => {
					return <Review key={review.id} review={review} />
				})}
			</section>
		</>
	)
}
