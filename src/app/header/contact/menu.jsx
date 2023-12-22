import { MenuTrigger, Button } from 'react-aria-components';
import ContactPopover from './popover';

export default function Contact() {
	return (
		<MenuTrigger>
			<Button aria-label='Contact Menu' role='tab'>
				Contact
			</Button>
			<ContactPopover />
		</MenuTrigger>
	);
}
