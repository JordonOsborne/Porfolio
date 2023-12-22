import { MenuTrigger, Button } from 'react-aria-components';
import ProjectPopover from './popover';

export default function projectsMenu() {
	const projects = [
		{ id: 1, icon: 'SharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'Power Apps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'Web Development', name: 'Web Development', years: 7 },
	];
	const technology = [
		{ id: 1, icon: 'SharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'Power Apps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'HTML', name: 'HTML', years: 7 },
		{ id: 4, icon: 'CSS', name: 'CSS', years: 7 },
		{ id: 5, icon: 'JavaScript', name: 'JavaScript', years: 7 },
		{ id: 6, icon: 'Firebase', name: 'Firebase', years: 7 },
		{ id: 7, icon: 'Next', name: 'Next JS', years: 7 },
		{ id: 8, icon: 'Power BI', name: 'Power BI', years: 7 },
		{ id: 9, icon: 'Power Automate', name: 'Power Automate', years: 7 },
		{ id: 10, icon: 'SQL', name: 'SQL', years: 7 },
		{ id: 11, icon: 'WIX', name: 'WIX', years: 7 },
		{ id: 12, icon: 'Tailwind', name: 'Tailwind', years: 7 },
	];

	return (
		<MenuTrigger>
			<Button aria-label='Projects Menu' role='tab'>
				Projects
			</Button>
			<ProjectPopover projects={projects} technology={technology} />
		</MenuTrigger>
	);
}
