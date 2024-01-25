'use client'
import Modal from './modal'
import SearchBar from './searchBar'
import ViewSelector from './viewSelector'
import DataView from './dataView'
import AuthContext from '../../../../context/auth'
import Data from '../../../../context/data'
import { useContext, useState, useEffect } from 'react'

export default function Users() {
	const { user } = useContext(AuthContext)
	const { GetData } = useContext(Data)
	const [users, setUsers] = useState([])
	const [userInfo, setUserInfo] = useState()
	const GetUsers = async () => {
		const data = await GetData('Users')
		setUsers(data)
	}
	const isLoggedIn = async () => {
		await setTimeout(() => {
			return
		}, 1000)
		return user !== null
	}

	useEffect(() => {
		// CHECK IF USER IS ADMIN
		if (!isLoggedIn()) {
			throw new Error('Not Authorized')
		}
		GetUsers()
	}, [])

	const OpenModal = (user) => {
		setUserInfo(user)
	}

	return (
		<main>
			<div className='sm:flex sm:items-center sm:justify-between'>
				<h4 className='font-light'>Users</h4>
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
