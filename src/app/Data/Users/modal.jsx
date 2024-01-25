import Info from './info'
import UserForm from './form'
import Icon from '../../Icons/icon'
import { useEffect, useState, useRef } from 'react'

export default function modal({ user, setUser }) {
	const [mode, setMode] = useState('view')
	const modal = useRef(null)

	// CLOSE MODAL IF SELECTED OUTSIDE OF THE PANEL
	useEffect(() => {
		modal.current?.addEventListener('click', (e) => {
			const modalDimensions = modal.current.getBoundingClientRect()
			if (
				e.clientX < modalDimensions.left ||
				e.clientX > modalDimensions.right ||
				e.clientY < modalDimensions.top ||
				e.clientY > modalDimensions.bottom
			) {
				Close()
			}
		})
	}, [])

	useEffect(() => {
		if (user) {
			modal.current.showModal()
		}
	}, [user])

	const Close = () => {
		setMode('view')
		setUser(null)
		modal.current?.close()
	}

	return (
		<dialog
			data-modal
			ref={modal}
			className='p-2 w-5/6 md:w-2/3 max-w-3xl backdrop:backdrop-blur-sm rounded-md focus-visible:outline-none bg-light text-dark dark:bg-dark dark:text-light border border-dark dark:border-light'
		>
			<div className='w-full lg:max-h-modal rounded-md flex flex-col items-center'>
				<div className='flex justify-between items-center w-full'>
					<h3 className='capitalize px-2 text-lg md:text-xl'>{user?.name}</h3>
					<div className='flex gap-2'>
						{mode === 'view' ? (
							<Icon
								name='edit'
								size={30}
								className='fill-dark dark:fill-light'
								onClick={() => setMode('edit')}
							/>
						) : (
							<button type='submit' form='UserForm'>
								<Icon
									name='save'
									size={30}
									className='fill-dark dark:fill-light'
								/>
							</button>
						)}
						<Icon
							name='close'
							size={30}
							className='fill-dark dark:fill-light'
							onClick={() => Close()}
						/>
					</div>
				</div>
				{user &&
					(mode === 'view' ? (
						<Info user={user} />
					) : (
						<UserForm user={user} setMode={setMode} />
					))}
			</div>
		</dialog>
	)
}
