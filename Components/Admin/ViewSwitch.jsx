import styles from '../../styles/Admin.module.scss'
import ViewSelector from './ViewSelector'
import ViewTypeSwitch from './ViewTypeSwitch'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { IoMdAddCircle } from 'react-icons/io'

function TableSwitch() {
	const router = useRouter()
	const { table, setShowForm, setFormData } = useContext(FirebaseAPI)

	const NewForm = () => {
		setFormData(null)
		setShowForm(true)
	}

	return (
		<>
			<div className={styles.Menu}>
				<button
					onClick={() =>
						table === 'Users' ? router.push('/SignIn?Register=true') : NewForm()
					}
				>
					<IoMdAddCircle />
					New
				</button>
				<ViewSelector />
			</div>
			<ViewTypeSwitch />
		</>
	)
}

export default TableSwitch
