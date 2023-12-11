import { MenuItem, Label } from 'react-aria-components';
import Image from 'next/image';

function companyInfo({ company }) {
	if (!company) {
		company = {
			logo: '/img/Eastman.png',
			name: 'Eastman Chemical Company',
			width: 6.666,
		};
	}
	return (
		<MenuItem className='company-info'>
			<Image
				src={company?.logo}
				alt={company.name + ' Logo'}
				width={company.width * 30}
				height='30'
				className='block'
			/>
			<Label className='pt-4'>{company?.name}</Label>
		</MenuItem>
	);
}

export default companyInfo;
