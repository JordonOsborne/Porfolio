import { toast } from 'react-toastify'

// FORM VALIDATION FUNCTIONS
export function RequiredFields(Form) {
	const allFields = Array.from(document[Form].elements)
	let requirements = []
	allFields.forEach((input) => {
		if (input.nodeName === 'INPUT' && input.required) {
			requirements.push(input)
		}
	})
	// GET REQUIRED RICH TEXT EDITORS
	const RTEs = document.getElementsByClassName('ql-editor')
	Array.from(RTEs).forEach((input) => {
		const rteParent =
			input.parentElement.parentElement.previousSibling.parentElement
		if (rteParent.hasAttribute('required')) {
			requirements.push(input)
		}
	})
	return requirements
}

export function FormIsValid(requirements) {
	const errors = []
	requirements.forEach((requirement) => {
		let error = InputIsValid(requirement)
		if (error) {
			errors.push(error)
		}
	})
	if (errors.length === 0) {
		return true
	} else {
		errors.forEach((error) => {
			ToastError(error.Message)
		})
		return false
	}
}

export function InputIsValid(input) {
	let error
	if (
		(input.nodeName === 'INPUT' && input.value === '') ||
		input.classList[1] === 'ql-blank'
	) {
		const rteParent =
			input.parentElement.parentElement.previousSibling.parentElement
		const title =
			input.classList[0] === 'ql-editor' ? rteParent.title : input.title
		error = {
			Code: 'Error',
			Message: `${title} is required`,
		}
		return error
	}
}

// UTILITY FUNCTIONS
export function GetPhoneNumber(PhoneNumber) {
	let cleaned = ('' + PhoneNumber).replace(/\D/g, '')
	let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
	if (match) {
		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
	}
	return null
}
export function ToastError(message) {
	toast.error(message, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: 'colored',
	})
}
export function ToastSuccess(message) {
	toast.success(message, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: 'colored',
	})
}
