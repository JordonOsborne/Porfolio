import Star from './star'

export default function Rating({ rating, size, fillClass }) {
	if (!rating) {
		rating = 0
	}

	const starType = (star) => {
		if (rating - star >= 0) {
			return 'full'
		} else if (rating - star > -1) {
			return 'half'
		} else {
			return 'empty'
		}
	}

	return (
		<div className='flex items-center'>
			<Star className={fillClass} size={size} type={starType(1)} />
			<Star className={fillClass} size={size} type={starType(2)} />
			<Star className={fillClass} size={size} type={starType(3)} />
			<Star className={fillClass} size={size} type={starType(4)} />
			<Star className={fillClass} size={size} type={starType(5)} />
		</div>
	)
}
