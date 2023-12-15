import Star from './star';

export default function layout({
	className,
	size,
	rating,
	reviewCount,
	commentCount,
}) {
	if (!rating) {
		rating = 0;
	}

	const starType = (star) => {
		if (rating - star >= 0.5) {
			return 'full';
		} else if (rating - star >= 0) {
			return 'half';
		} else {
			return 'empty';
		}
	};
	return (
		<div>
			<div className='flex items-center'>
				<span>Rating:</span>
				<Star className={className} size={size} type={starType(1)} />
				<Star className={className} size={size} type={starType(2)} />
				<Star className={className} size={size} type={starType(3)} />
				<Star className={className} size={size} type={starType(4)} />
				<Star className={className} size={size} type={starType(5)} />
				{rating && (
					<span className='pl-2 text-xs text-neutral-600'>
						{`(${reviewCount} Reviews)`}
					</span>
				)}
			</div>
			<div className='py-1 text-xs text-neutral-600'>{`${commentCount} Comments`}</div>
		</div>
	);
}
