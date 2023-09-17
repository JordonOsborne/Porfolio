import Link from 'next/link'
import Image from 'next/image'
import { MdAccountCircle } from 'react-icons/md'
import { SiPowerapps, SiPowerautomate, SiPowerbi } from 'react-icons/si'
import styles from '../../styles/ProjectCard.module.scss'

export default function ProjectCard({ Info }) {
	return (
		<Link href={`/Projects/${Info.id}`}>
			<div className={styles.Card}>
				<h3>{Info?.Project}</h3>
				<div className={styles.Panel}>
					{Info?.MockUpImg ? (
						<Image
							className={styles.MockUp}
							src={Info?.CardMockUpImg}
							alt={`${Info.Project} Image`}
							width='400'
							height='300'
						/>
					) : (
						<Image
							className={styles.MockUp}
							src='/img/MockUp.png'
							alt={`${Info.Project} Image`}
							width='400'
							height='300'
						/>
					)}
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
				<div className={styles.Panel}>
					<div className={styles.Technology}>
						{Info?.Technology?.map((tech) => {
							return (
								<Image
									key={tech}
									src={`/Icons/${tech}.png`}
									alt={tech}
									width='20px'
									height='20px'
								/>
							)
						})}
					</div>
					<p>{Info?.Description}</p>
				</div>
			</div>
		</Link>
	)
}
