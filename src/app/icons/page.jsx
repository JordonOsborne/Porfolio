'use client'
import Data from './data'
import Icon from './icon'
import Modal from './modal'
import SearchBar from './searchBar'
import AuthContext from '../../lib/auth'
import { AlphaSort } from '../../utilities/sort'
import { IconSearch } from '../header/SearchBar'
import { useSearchParams } from 'next/navigation'
import { useContext, useState, useRef, useEffect } from 'react'

export default function Icons() {
	const { user } = useContext(AuthContext)
	const [icon, setIcon] = useState()
	const params = useSearchParams()
	const q = params.get('q')
	const modal = useRef(null)
	let Icons = Data()

	// CLOSE MODAL IF SELECTED OUTSIDE OF THE PANEL
	useEffect(() => {
		// CHECK IF USER IS ADMIN
		if (!user) {
			throw new Error('Not Authorized')
		}
		modal.current?.addEventListener('click', (e) => {
			const modalDimensions = modal.current.getBoundingClientRect()
			if (
				e.clientX < modalDimensions.left ||
				e.clientX > modalDimensions.right ||
				e.clientY < modalDimensions.top ||
				e.clientY > modalDimensions.bottom
			) {
				Closemodal()
			}
		})
	}, [])

	// FILTER ICONS IS SEARCHED
	if (q) {
		Icons = IconSearch(Icons, q)
	}
	Icons = AlphaSort(Icons, 'name')

	const Openmodal = (icon) => {
		setIcon(icon)
		modal.current.showModal()
	}

	const Closemodal = () => {
		modal.current.close()
		setIcon(null)
	}

	const IsLastItem = (list, item) => {
		if (typeof item == 'string') {
			return list.slice(-1) == item
		} else {
			return list.slice(-1)[0].name == item.name
		}
	}

	return (
		<main>
			<div className='flex justify-between items-center gap-2'>
				<h3>Icons</h3>
				<SearchBar q={q} />
			</div>
			<div className='mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 items-center justify-center'>
				{Icons.map((icon) => {
					return (
						<div
							key={icon.name}
							onClick={() => Openmodal(icon)}
							className='p-1 flex flex-col items-center justify-center border rounded-md border-neutral-700 dark:neutral-800 shadow-sm hover:shadow-md shadow-neutral-700 dark:shadow-neutral-800 cursor-pointer'
						>
							<Icon
								name={icon.name}
								size='lg'
								className='fill-dark dark:fill-light'
							/>
							<label className='capitalize italic font-light'>
								{icon.title}
							</label>
						</div>
					)
				})}
			</div>
			<dialog
				data-modal
				ref={modal}
				className='p-2 w-5/6 md:w-2/3 max-w-3xl backdrop:backdrop-blur-sm rounded-md focus-visible:outline-none bg-light text-dark dark:bg-dark dark:text-light border border-dark dark:border-light'
			>
				<Modal icon={icon} close={Closemodal} isLastItem={IsLastItem} />
			</dialog>
		</main>
	)
}
