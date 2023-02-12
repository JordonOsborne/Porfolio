import Loading from '../Reusable/Loading'
import Clients from './Clients'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useContext } from 'react'

function TableSwitch() {
	const { isLoading, table } = useContext(FirebaseAPI)

	const ChooseTable = () => {
		switch (table) {
			case 'Clients':
				return <Clients />
			default:
				break
		}
	}

	return <>{isLoading ? <Loading /> : ChooseTable()}</>
}

export default TableSwitch
