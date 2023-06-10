import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Admin.module.scss'

export default function ProjectCard({ Info }) {
	return (
		<Link href={`/Projects/${Info.id}`}>
			<div className={styles.Card}>
				<div className={styles.Visuals}>
					<div className={styles.Company}>
						<Image
							className={styles.CompanyLogo}
							src={Info?.Company?.Logo}
							alt={Info?.Company?.id}
							width={Info?.Company?.id === 'EMN' ? '300px' : '40px'}
							height='40px'
						/>
					</div>
					{Info?.MockUpImg ? (
						<Image
							className={styles.MockUp}
							src={Info?.MockUpImg}
							alt={`${Info.Project} Image`}
							width='300px'
							height='225px'
						/>
					) : (
						<Image
							className={styles.MockUp}
							src='/img/MockUp.png'
							alt={`${Info.Project} Image`}
							width='300px'
							height='225px'
						/>
					)}
					<div className={styles.Images}>
						{Info.Images &&
							Info?.Images.map((image, index) => {
								return (
									<Image
										key={image}
										src={image}
										alt={`Image ${index}`}
										width='100px'
										height='75px'
									/>
								)
							})}
					</div>
				</div>
				<div className={styles.Info}>
					<a
						className={styles.Project}
						href={Info?.URL}
						target='_blank'
					>
						<h3>{Info?.Project}</h3>
					</a>
					<div className={styles.Technology}>
						{Info?.Technology?.map((tech) => {
							return (
								<Image
									key={tech}
									src={`/Icons/${tech}.png`}
									alt={tech}
									width='30px'
									height='30px'
								/>
							)
						})}
					</div>
					<div className={styles.rteHTML}>{Info?.Description}</div>
				</div>
			</div>
		</Link>
	)
}
