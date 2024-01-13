import { MenuItem, Label, Button } from 'react-aria-components'
import Image from 'next/image'
import Icon from '../Icons/icon'
import { getPxSize } from '../Icons/icon'

export default function linkIcon({
	action,
	href,
	label,
	size,
	src,
	icon,
	target,
}) {
	size = getPxSize(size)
	if (!target) {
		target = '_self'
	}
	if (action) {
		return (
			<MenuItem>
				<Button
					onPressStart={() => action()}
					className={
						size < 30
							? 'group link-icon flex-row gap-2 hover:text-primary-800 dark:hover:text-primary-700'
							: 'group link-icon flex-col w-[125px]'
					}
				>
					{src ? (
						<Image src={src} alt={label} width={size} height={size} />
					) : (
						<Icon
							name={icon}
							size={size}
							className='fill-current group-hover:fill-primary-800 dark:group-hover:fill-primary-700'
						/>
					)}
					<Label
						className={
							size < 30
								? 'pr-2 max-w-full truncate text-sm italic text-neutral-900 dark:text-neutral-600 group-hover:text-primary-800 dark:group-hover:text-primary-700 flex-1'
								: 'pt-2 text-center text-xs group-hover:text-primary-800 dark:group-hover:text-primary-700'
						}
					>
						{label}
					</Label>
				</Button>
			</MenuItem>
		)
	} else {
		return (
			<MenuItem
				href={href}
				target={target}
				className={
					size < 30
						? 'group link-icon flex-row gap-2 hover:text-primary-800 dark:hover:text-primary-700'
						: 'group link-icon flex-col w-[125px] hover:text-primary-800 dark:hover:text-primary-700'
				}
			>
				{src ? (
					<Image src={src} alt={label} width={size} height={size} />
				) : (
					<Icon
						name={icon}
						size={size}
						className='group-hover:fill-primary-800 dark:group-hover:fill-primary-700'
					/>
				)}
				<Label
					className={
						size < 30
							? 'pr-2 max-w-full truncate text-sm italic text-neutral-900 dark:text-neutral-600 group-hover:text-primary-800 dark:group-hover:text-primary-700'
							: 'pt-2 text-center text-xs group-hover:text-primary-800 dark:group-hover:text-primary-700'
					}
				>
					{label}
				</Label>
			</MenuItem>
		)
	}
}
