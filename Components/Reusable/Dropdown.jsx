import styles from '../../styles/Forms.module.scss'
import { useState } from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'

function Dropdown({ Name, Default, Options, ShowLabel }) {
	const [selected, setSelected] = useState(Default)
	const [isOpen, setIsOpen] = useState(false)
	const BuildOptions = (Options) => {
		let options = []
		Options.map((option) => {
			options.push(
				<div
					key={option.value}
					onClick={() => ChangeValue(option.value)}
					className={option.value === selected ? styles.selected : ''}
				>
					{option.displayName}
				</div>
			)
		})
		return options
	}

	const ChangeValue = (value) => {
		setSelected(value)
		setIsOpen(false)
	}

	return (
		<>
			{Options.length > 0 ? (
				<div className={styles.dropdown}>
					{ShowLabel && <label htmlFor={Name.replace(' ', '')}>{Name}</label>}
					<div onClick={() => setIsOpen(!isOpen)}>
						<input
							id={Name.replace(' ', '')}
							name={Name.replace(' ', '')}
							title={Name}
							value={selected}
							readOnly
						/>
						{isOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
					</div>
					{isOpen && (
						<div className={styles.options}>{BuildOptions(Options)}</div>
					)}
				</div>
			) : (
				<></>
			)}
		</>
	)
}

export default Dropdown
