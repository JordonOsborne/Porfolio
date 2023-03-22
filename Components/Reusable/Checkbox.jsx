import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext, useState } from 'react'
import { FaWix, FaJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import {
	SiFirebase,
	SiNextdotjs,
	SiMicrosoftsqlserver,
	SiMicrosoftsharepoint,
	SiPowerapps,
	SiPowerautomate,
	SiPowerbi,
} from 'react-icons/si'

function Checkbox({ Id, Label, Default }) {
	const { InputUpdates } = useContext(FirebaseAPI)
	const [selected, setSelected] = useState(Default)

	const ChangeValue = (e) => {
		InputUpdates(e)[Id]
		setSelected(!selected)
	}

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
			case 'HTML':
				return (
					<FaHtml5
						className={styles.Icon}
						title='HTML'
					/>
				)
			case 'CSS':
				return (
					<FaCss3Alt
						className={styles.Icon}
						title='CSS'
					/>
				)
			case 'SQL':
				return (
					<SiMicrosoftsqlserver
						className={styles.Icon}
						title='SQL'
					/>
				)
			case 'Firebase':
				return (
					<SiFirebase
						className={styles.Icon}
						title='Firebase'
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
			case 'Power Apps':
				return (
					<SiPowerapps
						className={styles.Icon}
						title='Power Apps'
					/>
				)
			case 'Power Automate':
				return (
					<SiPowerautomate
						className={styles.Icon}
						title='Power Automate'
					/>
				)
			case 'Power BI':
				return (
					<SiPowerbi
						className={styles.Icon}
						title='Power BI'
					/>
				)
			default:
				return Label
		}
	}

	return (
		<div className={styles.checkbox}>
			<label
				key={Id}
				className={selected ? styles.selected : undefined}
			>
				{setIcon(Label)}
				<input
					type='checkbox'
					name={Label}
					id={Id}
					value={selected}
					data-selected={JSON.stringify(Label)}
					onChange={(e) => ChangeValue(e)}
					checked={selected}
				/>
			</label>
		</div>
	)
}

export default Checkbox
