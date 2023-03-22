// MULTI-SELECT USED FOR ARRAY'S WITH VALUES ONLY (DO NOT USE OBJECT ARRAY'S)
import styles from '../../styles/Forms.module.scss'
import Checkbox from './Checkbox'

function MultiSelect({ Id, Label, Default, Options }) {
	const isSelected = (value) => {
		return Default.find((item) => item === value) !== undefined
	}

	return (
		<fieldset
			className={styles.MultiSelect}
			id={Id}
			name={Id}
		>
			<legend>{Label}</legend>
			{Options.map((option) => {
				return (
					<Checkbox
						Id={option.replace(' ', '')}
						Label={option}
						Default={isSelected(option)}
					/>
				)
			})}
		</fieldset>
	)
}

export default MultiSelect
