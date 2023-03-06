import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'

function MultiSelect({ Id, Label, Default, Options, Icon, Required }) {
	const { GetInputData } = useContext(FirebaseAPI)
	const [selected, setSelected] = useState(Default)
	const [options, setOptions] = useState([])

	useEffect(() => {
		const BuildOptions = (Options) => {
			let options = []
			Options.map((option) => {
				options.push(
					<label
						key={option.value}
						className={
							selected && option.value === selected.value ? styles.selected : ''
						}
					>
						{option.displayName}
						<input
							type='checkbox'
							name={option.displayName}
							id={option.value}
							data-selected={JSON.stringify(option)}
							onChange={(e) => ChangeValue(e)}
							checked={
								selected && selected.find(({ value }) => value === option.value)
							}
						/>
					</label>
				)
			})
			setOptions(options)
		}
		BuildOptions(Options)
	}, [selected])

	const setIcon = (Icon) => {
		switch (Icon) {
			case 'Person':
				return <MdAccountCircle className={styles.Icon} />
			case 'Client':
				return <GrOrganization className={styles.Icon} />
			default:
				return
		}
	}

	const ChangeValue = (e) => {
		const value = GetInputData(e)[Id]
		setSelected(value)
	}

	return (
		<fieldset
			className={styles.MultiSelect}
			id={Id}
			name={Id}
		>
			<legend>{Label}</legend>
			{options}
		</fieldset>
	)
}

export default MultiSelect
