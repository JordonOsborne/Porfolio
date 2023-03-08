import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useEffect, useContext } from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
import { GrOrganization } from 'react-icons/gr'

function Dropdown({
	Id,
	Default,
	Options,
	DisplayField,
	ShowLabel,
	Icon,
	Required,
}) {
	const { GetInputData } = useContext(FirebaseAPI)
	const [selected, setSelected] = useState(Default)
	const [isOpen, setIsOpen] = useState(false)
	const [options, setOptions] = useState([])

	useEffect(() => {
		const BuildOptions = (Options) => {
			let options = []
			Options.map((option) => {
				options.push(
					<div
						key={option.value}
						onClick={(e) => ChangeValue(e)}
						data-id={Id.replace(' ', '')}
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
		}
		BuildOptions(Options)
		setSelected(Default)
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
		const value = GetInputData(e)[Id]
		setSelected(value)
		setIsOpen(false)
	}

	return (
		<>
			{Options.length > 0 && (
				<div className={styles.dropdown}>
					{ShowLabel && <label htmlFor={Id.replace(' ', '')}>{Id}</label>}
					<div onClick={() => setIsOpen(!isOpen)}>
						{setIcon(Icon)}
						<input
							id={Id.replace(' ', '')}
							name={Id.replace(' ', '')}
							title={Id}
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
	)
}

export default Dropdown
