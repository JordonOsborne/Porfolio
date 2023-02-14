import Loading from '../Reusable/Loading'
import Clients from './Clients'
import Users from './Users'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function TableSwitch() {
	const { isLoading, table } = useContext(FirebaseAPI)

	const ChooseTable = () => {
		switch (table) {
			case 'Clients':
				return <Clients />
			case 'Users':
				return <Users />
			default:
				break
		}
	}

	return <>{isLoading ? <Loading /> : ChooseTable()}</>
}

export default TableSwitch
