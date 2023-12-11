import Icon from '../icons/layout';

export default function SearchBar() {
	return (
		<div className='relative'>
			<span className='absolute bottom-[2px] left-2'>
				<Icon
					icon='search'
					size='small'
					className='fill-dark dark:fill-light'
				/>
			</span>
			<input
				type='search'
				placeholder='Search Porfolio'
				aria-placeholder='Search Porfolio'
				className='p-[2px] pl-9 text-sm font-extralight rounded-full w-[300px] border-[1px] border-neutral-700 dark:border-neutral-800 focus:outline-none bg-neutral-600 dark:bg-neutral-900'
			/>
		</div>
	);
}
