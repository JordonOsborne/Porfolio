import Image from 'next/image'
import Icon from '../../Icons/icon'

export default function grid({ users, OpenModal }) {
	return (
		<div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center'>
			{users.map((user) => {
				return (
					<div
						key={user.id}
						onClick={() => OpenModal(user)}
						className='p-2 grid grid-cols-4 items-center justify-center gap-2 border overflow-hidden rounded-md border-neutral-700 dark:neutral-800 shadow-sm hover:shadow-md shadow-neutral-700 dark:shadow-neutral-800 cursor-pointer'
					>
						<Image
							src={user.PhotoURL}
							alt={user?.Name + ' Image'}
							className='p-2 rounded-full w-20 h-20'
							width='80'
							height='80'
							priority
						/>
						<div className='col-span-3 text-xs font-light'>
							<label className='text-base font-semibold overflow-hidden text-ellipsis'>
								{user?.Name}
							</label>
							<div className='pl-2 italic text-sm'>Manager</div>
							<div className='py-1 flex items-center gap-1'>
								<Icon name='phone' size='sm' />
								<span>{user.Phone}</span>
							</div>
							<div className='py-1 flex items-center gap-1'>
								<Icon name='email' size='sm' />
								<span className='w-full overflow-hidden text-ellipsis'>
									{user.Email}
								</span>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
