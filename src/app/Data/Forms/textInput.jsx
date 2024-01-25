import {
	TextField,
	Input,
	FieldError,
	Label,
	Text,
} from 'react-aria-components'

export default function TextInput({
	label,
	description,
	errorMessage,
	...props
}) {
	const { type } = props
	let Type = type
	if (!type) {
		Type = 'text'
	}
	let checkValidity
	switch (Type) {
		case 'phone':
			checkValidity = (phoneNumber) => {
				const cleaned = ('' + phoneNumber).replace(/\D/g, '')
				if (cleaned.length < 10) {
					return 'Must contain area code.'
				}
				if (cleaned.length > 10) {
					return 'Phone number contains too many characters.'
				}
				return true
			}
			break
		default:
			checkValidity = true
			break
	}
	if (type == 'phone') {
		checkValidity = (phoneNumber) => {
			const cleaned = ('' + phoneNumber).replace(/\D/g, '')
			if (cleaned.length < 10) {
				return 'Must contain area code.'
			}
			if (cleaned.length > 10) {
				return 'Phone number contains too many characters.'
			}
			return true
		}
	}

	return (
		<TextField
			{...props}
			type={Type}
			validate={checkValidity}
			className='mb-2 mx-auto w-min md:mx-0 md:w-auto flex flex-wrap gap-1 items-center'
		>
			<Label className='md:text-right w-32'>{label}</Label>
			<Input className='px-2 text-dark dark:text-light bg-neutral-600 dark:bg-neutral-900 w-60 rounded focus-visible:outline-none data-[invalid]:border-2 data-[invalid]:border-error' />
			{description && <Text slot='description'>{description}</Text>}
			<FieldError className='px-2 text-xs text-error w-92 italic truncate'>
				{errorMessage}
			</FieldError>
		</TextField>
	)
}
