import { MenuItem, Meter, Label } from 'react-aria-components'
import Icon from '../Icons/icon'

export default function layout({ tech }) {
	const getTimeUnitDivisor = (timeUnit) => {
		switch (timeUnit) {
			case 'days':
				return 1000 * 60 * 60 * 24
			case 'months':
				// Based on a 31 day month
				return 1000 * 60 * 60 * 24 * 31
			case 'years':
				return 1000 * 60 * 60 * 24 * 365
			default:
				// Defaut returns days
				return 1000 * 60 * 60 * 24
		}
	}

	const getYearsExperience = () => {
		let years = (new Date() - tech.startDate) / getTimeUnitDivisor('years')
		return Math.round((years + Number.EPSILON) * 100) / 100
	}

	const getTotalYearsDeveloping = () => {
		const startDate = Date.parse('03/01/2014')
		let years = (new Date() - startDate) / getTimeUnitDivisor('years')
		return Math.round((years + Number.EPSILON) * 100) / 100
	}

	return (
		<MenuItem id={tech.name}>
			<Meter
				value={getYearsExperience()}
				valueLabel={Math.round(getYearsExperience()) + ' years'}
				maxValue={getTotalYearsDeveloping()}
			>
				{({ percentage, valueText }) => (
					<>
						<Label className='meter-label'>
							<Icon icon={tech.name} size='small' />
							<span className='truncate'>{tech.name}</span>
						</Label>
						<div className='bar-group'>
							<div className='bar'>
								<div className='fill' style={{ width: percentage + '%' }} />
							</div>
							<span className='min-w-max'>{valueText}</span>
						</div>
					</>
				)}
			</Meter>
		</MenuItem>
	)
}
