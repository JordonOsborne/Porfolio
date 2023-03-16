import styles from '../../styles/Forms.module.scss'
import RichTextEditor from '../RichTextEditor'
import { useState } from 'react'

function RichTextInput({
	Id,
	Label,
	Placeholder,
	Default,
	ReadOnly,
	Required,
}) {
	const [value, setValue] = useState(Default)

	return (
		<div className={styles.labelDiv}>
			<label htmlFor={Id}>{Label}</label>
			<RichTextEditor
				id={Id}
				placeholder={Placeholder}
				title={Label}
				value={value}
				onChange={setValue}
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
