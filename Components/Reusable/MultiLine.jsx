import styles from '../../styles/Forms.module.scss'
import { useState, useContext } from 'react'
import FirebaseAPI from '../../Context/FirebaseAPI'

function MultiLine({
	Id,
	Label,
	Placeholder,
	Default,
	Rows,
	ReadOnly,
	Required,
	Visible,
}) {
	const { InputUpdates } = useContext(FirebaseAPI)
	const [value, setValue] = useState(Default)
	const OnChange = (e) => {
		const update = InputUpdates(e)[Id]
		setValue(update)
	}

	return (
		<>
			{ReadOnly ? (
				<div className={!Visible ? styles.hideDiv : styles.viewDiv}>
					<div id={Id}>{Default}</div>
				</div>
			) : (
				<div className={styles.labelDiv}>
					<label htmlFor={Id}>{Label}</label>
					<div className={styles.inputDiv}>
						<textarea
							id={Id}
							name={Label}
							title={Label ? Label : Id}
							placeholder={Placeholder}
							value={value}
							rows={Rows ? Rows : 5}
							required={Required}
							onChange={(e) => OnChange(e)}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default MultiLine
