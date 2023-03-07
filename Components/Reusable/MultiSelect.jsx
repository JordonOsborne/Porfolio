// MULTI-SELECT USED FOR ARRAY'S WITH VALUES ONLY (DO NOT USE OBJECT ARRAY'S)
import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import { FaWix, FaJs, FaHtml5, FaReact } from 'react-icons/fa'
import {
	SiNextdotjs,
	SiMicrosoftsharepoint,
	SiPowerapps,
	SiPowerautomate,
	SiPowerbi,
} from 'react-icons/si'

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
						key={option}
						className={selected && option ? styles.selected : ''}
					>
						{Id === 'Technology' ? setIcon(option) : option}
						<input
							type='checkbox'
							name={option}
							id={option}
							value={isSelected(option)}
							data-selected={JSON.stringify(option)}
							onChange={(e) => ChangeValue(e)}
							checked={isSelected(option)}
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
			case 'WIX':
				return (
					<FaWix
						className={styles.Icon}
						title='WIX'
					/>
				)
			case 'JavaScript':
				return (
					<FaJs
						className={styles.Icon}
						title='JavaScript'
					/>
				)
			case 'HTML/CSS':
				return (
					<FaHtml5
						className={styles.Icon}
						title='HTML/CSS'
					/>
				)
			case 'React':
				return (
					<FaReact
						className={styles.Icon}
						title='React'
					/>
				)
			case 'Next JS':
				return (
					<SiNextdotjs
						className={styles.Icon}
						title='Next JS'
					/>
				)
			case 'SharePoint':
				return (
					<SiMicrosoftsharepoint
						className={styles.Icon}
						title='SharePoint'
					/>
				)
			// case 'Power Apps':
			// 	return <SiPowerapps className={styles.Icon} />
			// case 'Power Automate':
			// 	return <SiPowerautomate className={styles.Icon} />
			case 'Power BI':
				return (
					<SiPowerbi
						className={styles.Icon}
						title='Power BI'
					/>
				)
			default:
				return
		}
	}
	const isSelected = (value) => {
		return selected && selected.find((item) => item === value) !== undefined
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
