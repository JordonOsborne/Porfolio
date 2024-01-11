import { MenuTrigger, Button } from 'react-aria-components'
import ProjectPopover from './popover'

export default function projectsMenu() {
	const projects = [
		{ id: 1, icon: 'SharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'Power Apps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'Web Development', name: 'Web Development', years: 7 },
	]
	const technology = [
		{ id: 1, icon: 'sharePoint', name: 'SharePoint', years: 9 },
		{ id: 2, icon: 'powerApps', name: 'Power Apps', years: 7 },
		{ id: 3, icon: 'html', name: 'HTML', years: 7 },
		{ id: 4, icon: 'css', name: 'CSS', years: 7 },
		{ id: 5, icon: 'javaScript', name: 'JavaScript', years: 7 },
		{ id: 6, icon: 'firebase', name: 'Firebase', years: 7 },
		{ id: 7, icon: 'nextJS', name: 'Next JS', years: 7 },
		{ id: 8, icon: 'powerBI', name: 'Power BI', years: 7 },
		{ id: 9, icon: 'powerAutomate', name: 'Power Automate', years: 7 },
		{ id: 10, icon: 'sql', name: 'SQL', years: 7 },
		{ id: 11, icon: 'wix', name: 'WIX', years: 7 },
		{ id: 12, icon: 'tailwind', name: 'Tailwind', years: 7 },
	]

	return (
		<MenuTrigger>
			<Button aria-label='Projects Menu' role='tab'>
				Projects
			</Button>
			<ProjectPopover projects={projects} technology={technology} />
		</MenuTrigger>
	)
}
