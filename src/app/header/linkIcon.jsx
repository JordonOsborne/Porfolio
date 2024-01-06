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
							? 'link-icon flex-row gap-2'
							: 'link-icon flex-col w-[125px]'
					}
				>
					{src ? (
						<Image src={src} alt={label} width={size} height={size} />
					) : (
						<Icon icon={icon} size={size} className='fill-current' />
					)}
					<Label
						className={
							size < 30
								? 'pr-2 max-w-full truncate text-sm italic text-neutral-900 dark:text-neutral-600 flex-1'
								: 'pt-2 text-center text-xs'
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
						? 'link-icon flex-row gap-2'
						: 'link-icon flex-col w-[125px]'
				}
			>
				{src ? (
					<Image src={src} alt={label} width={size} height={size} />
				) : (
					<Icon icon={icon} size={size} className='fill-current' />
				)}
				<Label
					className={
						size < 30
							? 'pr-2 max-w-full truncate text-sm italic text-neutral-900 dark:text-neutral-600'
							: 'pt-2 text-center text-xs'
					}
				>
					{label}
				</Label>
			</MenuItem>
		)
	}
}
