import { GetData } from '../../../lib/data-server'
import { headers } from 'next/headers'

export default async function serverPage(props) {
	const headersList = headers()
	const pathname = headersList.get('x-pathname')
	const modal = props.searchParams?.modal
	const id = props.searchParams?.id
	const users = await GetData('Users')
	console.log(users)
	return <div>{modal}</div>
}
