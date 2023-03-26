import styles from '../../styles/Admin.module.scss'
import ViewSelector from './ViewSelector'
import ViewTypeSwitch from './ViewTypeSwitch'
import AuthContext from '../../Context/AuthContext'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { IoMdAddCircle } from 'react-icons/io'

function TableSwitch() {
	const router = useRouter()
	const { table, setShowForm, setFormData } = useContext(FirebaseAPI)
	const { user } = useContext(AuthContext)

	const NewForm = () => {
		setFormData(null)
		setShowForm(true)
	}

	return (
		<>
			<div className={styles.Menu}>
				{table === 'Communications' && !user.isAdmin ? (
					<h2>{`${user.Company?.Company} Communications`}</h2>
				) : (
					<button
						onClick={() =>
							table === 'Users'
								? router.push('/SignIn?Register=true')
								: NewForm()
						}
					>
						<IoMdAddCircle />
						New
					</button>
				)}
				<ViewSelector />
			</div>
			<ViewTypeSwitch />
		</>
	)
}

export default TableSwitch
