import Image from 'next/image'
import Icon from '../../Icons/icon'

export default function table({ users, OpenModal }) {
	return (
		<main>
			<table className='my-2 table-auto w-full'>
				<thead>
					<tr className='border-b'>
						<th></th>
						<th className='px-2 text-left'>Name</th>
						<th className='px-2 text-left hidden md:table-cell'>Title</th>
						<th className='px-2 hidden md:table-cell'>Phone</th>
						<th className='px-2 text-left hidden md:table-cell'>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => {
						return (
							<tr
								onClick={() => OpenModal(user)}
								className='font-light cursor-pointer hover:bg-neutral-600 dark:hover:bg-neutral-900'
							>
								<td className='flex justify-center items-center'>
									<Image
										src={user.PhotoURL}
										alt={user?.Name + ' Image'}
										width='20'
										height='20'
										className='m-1 w-6 h-6 rounded-full'
									/>
								</td>
								<td className='px-2 font-normal'>{user?.Name}</td>
								<td className='px-2 hidden md:table-cell'>{user.Title}</td>
								<td className='px-2 hidden md:table-cell text-center'>
									{user.Phone}
								</td>
								<td className='px-2 hidden md:flex gap-1 items-center'>
									<Icon name='email' size='sm' />
									<span>{user.Email}</span>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</main>
	)
}
