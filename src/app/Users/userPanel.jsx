'use client'
import AuthContext from '@/lib/auth'
import Data from '@/lib/data-client'
import { useContext, useState, useEffect } from 'react'

export default function UserPanel() {
	const { user } = useContext(AuthContext)
	const { GetDoc } = useContext(Data)
	const [company, setCompany] = useState()
	const GetCompany = async (id) => {
		const data = await GetDoc('Clients', id)
		setCompany(data)
	}
	useEffect(() => {
		const clientId = user?.company
		if (clientId) {
			GetCompany(clientId)
		}
	}, [user])

	return (
		<section>
			<h3>My Profile</h3>
		</section>
	)
}
