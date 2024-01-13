export default function IconData() {
	// CONSTANTS
	const LogoComponents = [
		{
			name: 'Experience Meter',
			href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/Ratings/star.jsx',
		},
		{
			name: 'Link Icon',
			href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/linkIcon.jsx',
		},
	]

	const UIComponents = [
		{
			name: 'Modal',
			href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/icons/modal.jsx',
		},
	]
	return [
		{
			title: 'Close',
			name: 'close',
			type: 'UI',
			pages: ['Icons'],
			components: UIComponents,
		},
		{
			title: 'Search',
			name: 'search',
			type: 'UI',
			pages: ['Icons'],
			components: [
				{
					name: 'Search Bar',
					href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/SearchBar.jsx',
				},
			],
		},
		{
			title: 'Star',
			name: 'star',
			type: 'UI',
			pages: ['Projects', 'Ratings'],
			components: UIComponents,
		},
		{
			title: 'Half-Star',
			name: 'half-star',
			type: 'UI',
			pages: ['Projects', 'Ratings'],
			components: UIComponents,
		},
		{
			title: 'Resume',
			name: 'resume',
			type: 'UI',
			pages: ['About'],
		},
		{
			title: 'SharePoint',
			name: 'sharePoint',
			type: 'Logo',
			pages: ['About', 'Projects', 'Ratings'],
			components: LogoComponents,
		},
		{
			title: 'Power Automate',
			name: 'powerAutomate',
			type: 'Logo',
			pages: ['About', 'Projects', 'Ratings'],
			components: LogoComponents,
		},
		{
			title: 'Power Apps',
			name: 'powerApps',
			type: 'Logo',
			pages: ['About', 'Projects', 'Ratings'],
			components: LogoComponents,
		},
		{
			title: 'Power BI',
			name: 'powerBI',
			type: 'Logo',
			pages: ['About', 'Projects', 'Ratings'],
			components: LogoComponents,
		},
		{
			title: 'Web Development',
			name: 'webDevelopment',
			type: 'Logo',
			pages: ['About', 'Projects', 'Ratings'],
			components: LogoComponents,
		},
		{
			title: 'Next.JS',
			name: 'nextJS',
			type: 'Logo',
			pages: ['About', 'Projects', 'Ratings'],
			components: LogoComponents,
		},
		{
			title: 'HTML',
			name: 'html',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'CSS',
			name: 'css',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'JavaScript',
			name: 'javaScript',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'Firebase',
			name: 'firebase',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'SQL',
			name: 'sql',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'WIX',
			name: 'wix',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'Tailwind',
			name: 'tailwind',
			type: 'Logo',
			pages: ['Projects'],
			components: LogoComponents,
		},
		{
			title: 'PDF',
			name: 'pdf',
			type: 'Navigation',
			pages: ['About'],
		},
		{
			title: 'LinkedIn',
			name: 'linkedIn',
			type: 'Navigation',
			pages: ['About'],
		},
		{
			title: 'Dashboard',
			name: 'dashboard',
			type: 'Navigation',
			pages: ['Contact'],
		},
		{
			title: 'Communications',
			name: 'communications',
			type: 'Navigation',
			pages: ['Contact'],
		},
		{
			title: 'Invoice',
			name: 'invoice',
			type: 'Navigation',
			pages: ['Contact'],
		},
		{
			title: 'Quote',
			name: 'quote',
			type: 'Navigation',
			pages: ['Contact'],
		},
		{
			title: 'Skill Check',
			name: 'skillCheck',
			type: 'Navigation',
			pages: ['Contact'],
		},
		{
			title: 'Reviews',
			name: 'reviews',
			type: 'Navigation',
			pages: ['Contact'],
		},
		{
			title: 'Phone',
			name: 'phone',
			type: 'Navigation',
			pages: ['Contact', 'User'],
		},
		{
			title: 'Email',
			name: 'email',
			type: 'Navigation',
			pages: ['Contact', 'User'],
		},
		{
			title: 'Profile',
			name: 'profile',
			type: 'Navigation',
			pages: ['User'],
		},
		{
			title: 'Password',
			name: 'password',
			type: 'Navigation',
			pages: ['User'],
		},
		{
			title: 'Theme',
			name: 'theme',
			type: 'Navigation',
			pages: ['User'],
		},
		{
			title: 'Login',
			name: 'login',
			type: 'Navigation',
			pages: ['User'],
		},
		{
			title: 'Logout',
			name: 'logout',
			type: 'Navigation',
			pages: ['User'],
		},
		{
			title: 'Home',
			name: 'home',
			type: 'Navigation',
			components: [
				{
					name: 'Mobile Menu',
					href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/mobileMenu.jsx',
				},
			],
		},
		{
			title: 'About',
			name: 'about',
			type: 'Navigation',
			components: [
				{
					name: 'Mobile Menu',
					href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/mobileMenu.jsx',
				},
			],
		},
		{
			title: 'Projects',
			name: 'projects',
			type: 'Navigation',
			components: [
				{
					name: 'Mobile Menu',
					href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/mobileMenu.jsx',
				},
			],
		},
		{
			title: 'Contact',
			name: 'contact',
			type: 'Navigation',
			components: [
				{
					name: 'Mobile Menu',
					href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/mobileMenu.jsx',
				},
			],
		},
		{
			title: 'Expand',
			name: 'expand',
			type: 'Navigation',
			components: [
				{
					name: 'Mobile Menu',
					href: 'https://github.com/JordonOsborne/Porfolio/blob/Next-14/src/app/header/mobileMenu.jsx',
				},
			],
		},
	]
}
