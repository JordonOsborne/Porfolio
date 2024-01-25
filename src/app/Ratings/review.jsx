import Rating from './rating'

export default function Review({ review }) {
	return (
		<div>
			<div className='flex items-center justify-between flex-wrap'>
				<h4 className='text-base pb-1'>{review?.Project}</h4>
				<Rating rating={review.Rating} size='sm' />
			</div>
			<p className='pt-1 md:pt-0 px-2 text-sm italic font-light'>
				{review?.Comment}
			</p>
		</div>
	)
}
