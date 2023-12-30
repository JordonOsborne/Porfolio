import Icon from '../Icons/icon'

export default function star({ className, size, type }) {
	if (!className) {
		className = 'fill-current'
	}
	switch (type) {
		case 'full':
			return <Icon icon='star' size={size} className={className} />
		case 'half':
			return <Icon icon='half-star' size={size} className={className} />
		default:
			return <Icon icon='star' size={size} />
	}
}
