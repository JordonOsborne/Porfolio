import Icon from '../../Icons/icon'
import Image from 'next/image'
import Rating from '../../Ratings/rating'
import Review from '../../Ratings/review'
import useIsMobile from '../../../utilities/useIsMobile'
import Data from '../../../lib/data-client'
import { Label } from 'react-aria-components'
import { ShortDate } from '../../../utilities/date'
import { useContext, useEffect, useState } from 'react'

export default function info({ user }) {
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
				<section className='mx-auto col-span-2 lg:mx-1'>
					<div className='py-1 flex gap-2 italic'>
						<Label name='FirstName' className="not-italic after:content-[':']">
							First Name
						</Label>
						<span>{user?.FirstName}</span>
					</div>
					<div className='py-1 flex gap-2 italic'>
						<Label name='LastName' className="not-italic after:content-[':']">
							Last Name
						</Label>
						<span>{user?.LastName}</span>
					</div>
					<div className='py-1 flex gap-2 italic font-light'>
						<Label name='Phone'>
							<Icon name='phone' size='sm' />
						</Label>
						<span>{user?.Phone}</span>
					</div>
					<div className='py-1 flex gap-2 italic font-light'>
						<Label name='Email'>
							<Icon name='email' size='sm' />
						</Label>
						<span>{user?.Email}</span>
					</div>
				</section>
				<section className='my-2 mx-auto col-span-2 lg:my-0 lg:mx-1'>
					<div className='py-1 flex gap-2 text-sm italic'>
						<Label
							name='Created'
							className="not-italic text-right w-24 after:content-[':']"
						>
							Created
						</Label>
						<span>{ShortDate(user?.Created?.toDate())}</span>
					</div>
					<div className='py-1 flex gap-2 text-sm italic'>
						<Label
							name='LastLogin'
							className="not-italic text-right w-24 after:content-[':']"
						>
							Last Login
						</Label>
						<span>{ShortDate(user?.LastLogin?.toDate())}</span>
					</div>
				</section>
			</div>
			<hr className='w-10/12 my-4' />
			<section>
				<div className='mx-auto'>
					{company?.Logo ? (
						<>
							<Image
								src={company?.Logo}
								alt={company?.Client + ' Logo'}
								placeholder='blur'
								blurDataURL='/img/Logo_Blur.png'
								priority
								width='800'
								height='100'
								className='mx-auto h-8 w-auto'
							/>
							<h3 className='py-1 mx-auto italic text-center text-base lg:text-lg font-light'>
								{company?.Name}
							</h3>
						</>
					) : (
						<>
							<div className='mx-auto h-8 w-64 bg-neutral-600 dark:bg-neutral-900'></div>
							<div className='my-1 mx-auto h-5 w-64 bg-neutral-600 dark:bg-neutral-900'></div>
						</>
					)}
				</div>
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
