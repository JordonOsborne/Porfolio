import styles from '../../styles/Forms.module.scss'
import RichTextEditor from '../RichTextEditor'
import { useContext } from 'react'
import FirebaseAPI from '../../Context/FirebaseAPI'

function RichTextInput({
	Id,
	Label,
	Placeholder,
	Default,
	ReadOnly,
	Required,
}) {
	const { value, onChange } = useContext(FirebaseAPI)
	return (
		<div className={styles.labelDiv}>
			<label htmlFor={Id}>{Label}</label>
			<RichTextEditor
				id={Id}
				placeholder={Placeholder}
				value={value ? value : Default}
				onChange={onChange}
				controls={[
					['h1', 'h2', 'h3', 'h4'],
					['bold', 'italic', 'underline', 'link'],
					['unorderedList', 'orderedList'],
					['alignLeft', 'alignCenter', 'alignRight'],
				]}
				className={styles.RichText}
				required={Required}
				readOnly={ReadOnly}
			/>
		</div>
	)
}

export default RichTextInput
