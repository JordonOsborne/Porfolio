'use client'
import Modal from './modal'
import SearchBar from './searchBar'
import ViewSelector from './viewSelector'
import DataView from './dataView'
import AuthContext from '../../../lib/auth'
import Data from '../../../lib/data-client'
import { useContext, useState, useEffect } from 'react'

export default function Users() {
	const { user } = useContext(AuthContext)
	const { GetData } = useContext(Data)
	const [users, setUsers] = useState([])
	const [userInfo, setUserInfo] = useState()
	const GetUsers = async (company, myId) => {
		let data = []
		if (company) {
			// ONLY QUERY SAME ORGANIZATION USERS
			const companyUsers = await GetData('Users', 'Company == ' + company)
			// EXCLUDE CURRENT USER FROM DATA
			data = companyUsers.filter((user) => user.id != myId)
		} else {
			// EXCLUDE CURRENT USER FROM QUERY
			const allUsers = await GetData('Users', 'id != ' + myId)
			data = allUsers
		}
		setUsers(data)
	}

	useEffect(() => {
		// CHECK IF USER IS ADMIN
		if (user) {
			GetUsers(user?.Company, user?.id)
		} else {
			throw new Error('Not Authorized')
		}
	}, [user])

	const OpenModal = (user) => {
		setUserInfo(user)
	}

	return (
		<main>
			<div className='sm:flex sm:items-center sm:justify-between'>
				<h4 className='font-light'>{user?.isAdmin ? 'Users' : 'Co-Workers'}</h4>
				<div className='flex items-center gap-2'>
					<SearchBar />
					<ViewSelector />
				</div>
			</div>
			<DataView users={users} OpenModal={OpenModal} />
			<Modal user={userInfo} setUser={OpenModal} />
		</main>
	)
}
