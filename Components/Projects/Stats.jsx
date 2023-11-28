import { MdAccountCircle } from 'react-icons/md'
import { SiPowerapps, SiPowerautomate, SiPowerbi } from 'react-icons/si'
import styles from '../../styles/Projects.module.scss'

function Stats({ data }) {
	const RoundValues = (value) => {
		if (value > 3000) {
			return '3000+'
		}
		if (value > 2500) {
			return '2500+'
		}
		if (value > 2000) {
			return '2000+'
		}
		if (value > 1500) {
			return '1500+'
		}
		if (value > 1000) {
			return '1000+'
		}
		if (value > 500) {
			return '500+'
		} else {
			return value
		}
	}

	return (
		<div className={styles.Data}>
			<div data-stats={data.Users}>
				<MdAccountCircle />
				<p>{`${RoundValues(data.Users)} Users`}</p>
			</div>
			<div data-stats={data.Forms}>
				<SiPowerapps />
				<p>{`${RoundValues(data.Forms)} Forms`}</p>
			</div>
			<div data-stats={data.Automations}>
				<SiPowerautomate />
				<p>{`${RoundValues(data.Automations)} Flows`}</p>
			</div>
			<div data-stats={data.Reports}>
				<SiPowerbi />
				<p>{`${RoundValues(data.Reports)} Reports`}</p>
			</div>
		</div>
	)
}

export default Stats
