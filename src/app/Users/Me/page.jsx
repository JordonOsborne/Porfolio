import Users from '@/app/Data/Users/page'
import UserPanel from '../userPanel'

export default async function ProfilePage() {
	return (
		<main>
			<UserPanel />
			<Users />
		</main>
	)
}
