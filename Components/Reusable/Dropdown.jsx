import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
import { GrOrganization } from 'react-icons/gr'

function Dropdown({
	Id,
	Label,
	Default,
	Options,
	DisplayField,
	ShowLabel,
	Icon,
	Required,
	ReadOnly,
}) {
	const { DropdownUpdates } = useContext(FirebaseAPI)
	const [selected, setSelected] = useState(Default)
	const [isOpen, setIsOpen] = useState(false)
	const [options, setOptions] = useState([])

	useEffect(() => {
		const BuildOptions = (Options) => {
			let options = []
			Options.map((option) => {
				options.push(
					<div
						key={option.id}
						onClick={(e) => ChangeValue(e)}
						data-id={Id}
						data-value={JSON.stringify(option)}
						className={
							selected && option.id === selected.id ? styles.selected : ''
						}
					>
						{option[DisplayField]}
					</div>
				)
			})
			setOptions(options)
			return true
		}
		if (!ReadOnly) {
			BuildOptions(Options)
			setSelected(Default)
		}
	}, [Options])

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
		const value = DropdownUpdates(e)[Id]
		setSelected(value)
		setIsOpen(false)
	}

	return (
		<>
			{ReadOnly ? (
				<div className={styles.viewDiv}>
					{setIcon(Icon)}
					<div>{Default?.[DisplayField]}</div>
				</div>
			) : (
				<>
					{Options.length > 0 && (
						<div className={styles.dropdown}>
							{ShowLabel && <label htmlFor={Id}>{Label}</label>}
							<div onClick={() => setIsOpen(!isOpen)}>
								{setIcon(Icon)}
								<input
									id={Id}
									name={Id}
									title={Label}
									value={selected?.[DisplayField]}
									data-value={JSON.stringify(selected)}
									required={Required}
									readOnly
								/>
								{isOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
							</div>
							{isOpen && <div className={styles.options}>{options}</div>}
						</div>
					)}
				</>
			)}
		</>
	)
}

export default Dropdown
