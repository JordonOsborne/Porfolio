import styles from '../../styles/Project.module.scss'
import Image from 'next/image'

export default function ProjectDetails() {
	return (
		<div className={styles.Details}>
			<h4>Project Scope</h4>
			<p></p>
			<div className={styles.Center}>
				<div className={styles.Grid2}>
					<div>
						<div className={styles.Tech}>
							<Image
								src={`/Icons/SharePoint.png`}
								alt={'SharePoint Lists'}
								width='25px'
								height='25px'
							/>
							<h5>SharePoint Lists</h5>
						</div>
						<ul></ul>
					</div>
					<div>
						<div className={styles.Tech}>
							<Image
								src={`/Icons/SharePoint.png`}
								alt={'SharePoint Lists'}
								width='25px'
								height='25px'
							/>
							<h5>SharePoint Libraries</h5>
						</div>
						<ul></ul>
					</div>
					<div>
						<div className={styles.Tech}>
							<Image
								src={`/Icons/Power Automate.png`}
								alt={'SharePoint Lists'}
								width='25px'
								height='25px'
							/>
							<h5>Power Automates</h5>
						</div>
						<ul></ul>
					</div>
					<div>
						<div className={styles.Tech}>
							<Image
								src={`/Icons/Power BI.png`}
								alt={'SharePoint Lists'}
								width='25px'
								height='25px'
							/>

							<h5>Power BI Reports</h5>
						</div>
						<ul></ul>
					</div>
				</div>
			</div>
		</div>
	)
}
