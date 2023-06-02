import Actions from './Actions'
import styles from '../../styles/Panel.module.scss'
import Client from './Client'
import User from './User'
import Project from './Project'
import Communication from './Communication'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext, useEffect, useRef } from 'react'

function FormSwitch() {
	const { table, showForm, setShowForm } = useContext(FirebaseAPI)
	const modal = useRef(null)

	useEffect(() => {
		try {
			showForm ? modal.current?.showModal() : modal.current?.close()
		} catch (error) {
			console.log(error)
		}
	}, [showForm])

	// CLOSE DIALOG IF SELECTED OUTSIDE OF THE PANEL
	useEffect(() => {
		modal.current?.addEventListener('click', (e) => {
			const dialogDimensions = modal.current.getBoundingClientRect()
			if (
				e.clientX < dialogDimensions.left ||
				e.clientX > dialogDimensions.right ||
				e.clientY < dialogDimensions.top ||
				e.clientY > dialogDimensions.bottom
			) {
				CloseMenu()
			}
		})
	}, [])

	const CloseMenu = () => {
		setShowForm(false)
		modal.current.close()
	}

	const ChooseForm = () => {
		switch (table) {
			case 'Clients':
				return <Client />
			case 'Users':
				return <User />
			case 'Projects':
				return <Project />
			case 'Communications':
				return <Communication />
			default:
				break
		}
	}

	return (
		<dialog
			id={styles.FormPanel}
			className={table === 'Project' ? styles.SidePanelLg : styles.SidePanel}
			ref={modal}
		>
			<Actions />
			{ChooseForm()}
		</dialog>
	)
}

export default FormSwitch
