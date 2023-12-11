// PERSON ICONS SVG LIBRARY TO USE AS APPOSED TO INSTALING THE REACT ICONS
const layout = ({ icon, size, className }) => {
	// DETERMINE ICON SIZE
	size = getPxSize(size);

	// SET COLOR FOR ICON TO NEUTRAL GRAY
	if (!className) {
		className = 'fill-neutral-800';
	}

	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			{getPath(icon, className)}
		</svg>
	);
};

// GET ICON PIXEL SIZE
export const getPxSize = (size) => {
	switch (size) {
		case 'small':
			return 20;
		case 'medium':
			return 40;
		case 'large':
			return 75;
		case 'x-large':
			return 125;
		default:
			if (isNaN(size)) {
				return 40;
			} else {
				return size;
			}
	}
};

// FIND SVG PATH FROM LIST BELOW
const getPath = (icon, className) => {
	switch (icon) {
		case 'star':
			return (
				<path
					d='M21 29.432L30.888 35.4L28.264 24.152L37 16.584L25.496 15.592L21 5L16.504 15.592L5 16.584L13.72 24.152L11.112 35.4L21 29.432Z'
					fill='currentColor'
					className={className}
				/>
			);
		case 'half-star':
			return (
				<>
					<path
						d='M21 29.432L30.888 35.4L28.264 24.152L37 16.584L25.496 15.592L21 5L16.504 15.592L5 16.584L13.72 24.152L11.112 35.4L21 29.432Z'
						fill='currentColor'
						className='fill-neutral-800'
					/>
					<path
						d='M20.5001 6.66669L16.7534 15.4934L7.16675 16.32L14.4334 22.6267L12.2601 32L20.5001 27.0267V6.66669Z'
						fill='currentColor'
						className={className}
					/>
				</>
			);
		default:
			return (
				<path
					d='M19.4 24.8H22.6V28H19.4V24.8ZM19.4 12H22.6V21.6H19.4V12ZM21 4C12.152 4 5 11.2 5 20C5 24.2435 6.68571 28.3131 9.68629 31.3137C11.172 32.7994 12.9359 33.978 14.8771 34.7821C16.8183 35.5861 18.8989 36 21 36C25.2435 36 29.3131 34.3143 32.3137 31.3137C35.3143 28.3131 37 24.2435 37 20C37 17.8989 36.5861 15.8183 35.7821 13.8771C34.978 11.9359 33.7994 10.172 32.3137 8.68629C30.828 7.20055 29.0641 6.022 27.1229 5.21793C25.1817 4.41385 23.1012 4 21 4ZM21 32.8C17.6052 32.8 14.3495 31.4514 11.949 29.051C9.54857 26.6505 8.2 23.3948 8.2 20C8.2 16.6052 9.54857 13.3495 11.949 10.949C14.3495 8.54857 17.6052 7.2 21 7.2C24.3948 7.2 27.6505 8.54857 30.051 10.949C32.4514 13.3495 33.8 16.6052 33.8 20C33.8 23.3948 32.4514 26.6505 30.051 29.051C27.6505 31.4514 24.3948 32.8 21 32.8Z'
					fill='currentColor'
					className='fill-error'
				/>
			);
	}
};

export default layout;
