import Icon from '../Icons/icon'

export default function star({ className, size, type }) {
	if (!className) {
		className = 'fill-current'
	}
	switch (type) {
		case 'full':
			return <Icon name='star' size={size} className={className} />
		case 'half':
			return <Icon name='half-star' size={size} className={className} />
		default:
			return <Icon name='star' size={size} className='fill-neutral-800' />
	}
}
