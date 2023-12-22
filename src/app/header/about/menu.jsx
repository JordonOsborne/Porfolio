import { MenuTrigger, Button } from 'react-aria-components';
import AboutPopover from './popover';

export default function aboutMenu() {
	const experience = [
		{
			id: 1,
			name: 'SharePoint',
			years: 9,
			startDate: Date.parse('03/01/2014'),
		},
		{
			id: 2,
			name: 'Power Apps',
			years: 7,
			startDate: Date.parse('06/01/2016'),
		},
		{
			id: 3,
			name: 'Web Development',
			years: 7,
			startDate: Date.parse('01/01/2016'),
		},
		{
			id: 4,
			name: 'Power Automate',
			years: 5,
			startDate: Date.parse('01/01/2018'),
		},
		{
			id: 5,
			name: 'Next.js',
			years: 1,
			startDate: Date.parse('01/01/2023'),
		},
	];

	return (
		<MenuTrigger>
			<Button aria-label='About Menu' role='tab'>
				About
			</Button>
			<AboutPopover experience={experience} />
		</MenuTrigger>
	);
}
