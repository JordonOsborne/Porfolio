import styles from '../../styles/Forms.module.scss'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useState, useContext } from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'

function ViewFilter() {
	const { GetData, table, views, view, setView } = useContext(FirebaseAPI)
	const [isOpen, setIsOpen] = useState(false)

	const ChangeValue = (e) => {
		const filter = JSON.parse(e.target.dataset.value).filter
		const sort = JSON.parse(e.target.dataset.value).sort
		GetData(table, filter, sort)
		const value = e.target.id
		setView(value)
		setIsOpen(false)
	}

	return (
		<>
			{views.length > 0 && (
				<div className={styles.dropdown}>
					<div onClick={() => setIsOpen(!isOpen)}>
						<input
							value={view}
							readOnly
						/>
						{isOpen ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
					</div>
					{isOpen && (
						<div className={styles.options}>
							{views.map((option) => {
								return (
									<div
										key={option.id}
										id={option.id}
										onClick={(e) => ChangeValue(e)}
										data-value={JSON.stringify(option)}
										className={option.id === view ? styles.selected : ''}
									>
										{option.id}
									</div>
								)
							})}
						</div>
					)}
				</div>
			)}
		</>
	)
}

export default ViewFilter
