import Icon from './icon'
import Link from 'next/link'

export default function modal({ icon, close, isLastItem }) {
	return (
		<div className='w-full h-96 rounded-md flex flex-col items-center'>
			<div className='flex justify-between items-center w-full'>
				<h3 className='capitalize px-2'>{icon?.title}</h3>
				<Icon
					name='close'
					className='fill-dark dark:fill-light'
					onClick={() => close()}
				/>
			</div>
			<Icon name={icon?.name} size='x-large' />
			<div className='p-2 flex gap-2 w-full'>
				<label className='font-semibold'>Pages:</label>
				<div className='flex gap-2 flex-wrap'>
					{!icon?.pages ? (
						<p className='italic font-thin'>Navigational Element</p>
					) : (
						icon.pages.map((page) => {
							return (
								<div
									key={page}
									className='flex gap-2 justify-center items-center'
								>
									<Link
										href={`/${page}`}
										className='text-primary hover:text-primary-800 dark:hover:text-primary-700 hover:underline'
									>
										{page}
									</Link>
									{!isLastItem(icon.pages, page) && (
										<span className='pt-1 block rounded-full w-2 h-2 bg-light'></span>
									)}
								</div>
							)
						})
					)}
				</div>
			</div>
			{icon?.components && (
				<div className='p-2 flex gap-2 w-full'>
					<label className='font-semibold'>Components:</label>
					<div className='flex gap-2 flex-wrap'>
						{icon.components.map((component) => {
							return (
								<div
									key={component}
									className='flex gap-2 justify-center items-center'
								>
									<Link
										href={component.href}
										target='_blank'
										className='hover:underline italic font-light'
									>
										{component.name}
									</Link>
									{!isLastItem(icon.components, component) && (
										<span className='pt-1 block rounded-full w-2 h-2 bg-light'></span>
									)}
								</div>
							)
						})}
					</div>
				</div>
			)}
			<pre className='hidden md:block mt-2 p-2 bg-neutral-900 w-5/6 text-light max-w-2xl overflow-hidden text-ellipsis rounded-md'>
				<code>
					{`import Icon from './Icons/icon'`}
					<br />
					<br />
					{`export default function Page() {`}
					<br />
					{`	return <Icon icon='${icon?.name}' />`}
					<br />
				</code>
			</pre>
		</div>
	)
}
