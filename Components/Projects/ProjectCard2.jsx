import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Cards.module.scss'
import { MdAccountCircle, MdSpeed } from 'react-icons/md'
import { SiPowerapps, SiPowerautomate, SiPowerbi } from 'react-icons/si'
import { IoShieldCheckmark } from 'react-icons/io5'

export default function ProjectCard({ Info }) {
	return (
		<Link href={`/Projects/${Info.id}`}>
			<div className={styles.Card}>
				<div className={styles.Panel}>
					<h3>{Info?.Project}</h3>
					<div className={styles.Impact}>
						<div data-impact={'TEST'}>
							<MdSpeed />
							<p>{'TEST'}</p>
						</div>
						<div data-impact={'TEST 2'}>
							<IoShieldCheckmark />
							<p>{'TEST 2'}</p>
						</div>
						<div data-impact={Info?.Streamline}>
							<MdAccountCircle />
							<p>{Info?.Streamline}</p>
						</div>
						<div data-impact={Info?.Communication}>
							<MdAccountCircle />
							<p>{Info?.Communication}</p>
						</div>
					</div>
					<p>{Info?.Date?.toDate().toDateString()}</p>
				</div>
				<div className={styles.PanelSide}>
					<div className={styles.Data}>
						<div data-stats={Info?.Users}>
							<MdAccountCircle />
							<p>{`${Info?.Users} Users`}</p>
						</div>
						<div data-stats={Info?.Forms}>
							<SiPowerapps />
							<p>{`${Info?.Forms} Forms`}</p>
						</div>
						<div data-stats={Info?.Automations}>
							<SiPowerautomate />
							<p>{`${Info?.Automations} Flows`}</p>
						</div>
						<div data-stats={Info?.Reports}>
							<SiPowerbi />
							<p>{`${Info?.Reports} Reports`}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
