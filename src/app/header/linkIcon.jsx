import { MenuItem, Label } from 'react-aria-components';
import Image from 'next/image';
import Icon from '../icons/layout';
import { getPxSize } from '../icons/layout';

export default function linkIcon({ href, label, size, src, icon, target }) {
	size = getPxSize(size);
	if (!target) {
		target = '_self';
	}

	return (
		<MenuItem
			href={href}
			target={target}
			className={
				size < 30 ? 'flex-row gap-2' : 'flex-col justify-center max-w-[90px]'
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
						? 'pr-2 max-w-full truncate text-sm'
						: 'pt-2 text-center text-xs'
				}
			>
				{label}
			</Label>
		</MenuItem>
	);
}
