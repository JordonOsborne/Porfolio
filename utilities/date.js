// RETURN SHORT DATE
export const ShortDate = (Date) => {
	if (!Date) {
		return
	}
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return Date.toLocaleDateString('en-US', options)
}

// RETURN LONG DATE
export const LongDate = (Date) => {
	if (!Date) {
		return
	}
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return Date.toLocaleDateString('en-US', options)
}
