import Rating from './rating'

export default function AvgRating({
	className,
	size,
	rating,
	reviewCount,
	commentCount,
}) {
	return (
		<div className='rating'>
			<div className='flex items-center'>
				<label>Rating:</label>
				<Rating rating={rating} fillClass={className} size={size} />
				<span className='pl-2 text-xs text-neutral-900 dark:text-neutral-600 group-hover:text-primary-800 dark:group-hover:text-primary-700'>{`(${reviewCount} Reviews)`}</span>
			</div>
			<div className='py-1 text-xs text-neutral-900 dark:text-neutral-600 group-hover:text-primary-800 dark:group-hover:text-primary-700'>{`${commentCount} Comments`}</div>
		</div>
	)
}
