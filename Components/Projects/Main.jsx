import styles from '../../styles/Project.module.scss'
import EditMode from './Main_Edit'
import { MdAccountCircle } from 'react-icons/md'
import { SiPowerapps, SiPowerautomate, SiPowerbi } from 'react-icons/si'
import Image from 'next/image'
import Link from 'next/link'

export default function Main({ project, edit, setImgModal, setImages }) {
	const SetImagesArray = (images) => {
		images = []
		project?.Images.forEach((image, index) => {
			const item = { Title: `Image ${index + 1}`, image }
			images.push(item)
		})
		console.log(images)
		setImages(images)
	}

	if (edit) {
		return <EditMode project={project} />
	} else {
		return (
			<div className={styles.Heading}>
				<Link href={`/Projects/`}>{`<< Back to Projects`}</Link>
				<h1>{project.Project}</h1>
				<div className={styles.Stats}>
					<span>
						<MdAccountCircle />
						<h3>{`${project.Users} Users`}</h3>
					</span>
					<span>
						<SiPowerapps />
						<h3>{`${project.Forms} Forms`}</h3>
					</span>
					<span>
						<SiPowerautomate />
						<h3>{`${project.Automations} Automations`}</h3>
					</span>
					<span>
						<SiPowerbi />
						<h3>{`${project.Reports} Reports`}</h3>
					</span>
				</div>
				<p>{project.Description}</p>
				<div className={styles.Images}>
					{project?.MockUpImg ? (
						<Image
							className={styles.MockUp}
							src={project?.MockUpImg}
							alt={`${project.Project} Image`}
							width='350'
							height='197'
						/>
					) : (
						<Image
							className={styles.MockUp}
							src='/img/MockUp.png'
							alt={`${project.Project} Image`}
							width='350'
							height='197'
						/>
					)}
					<div className={styles.Gallery}>
						{project.Images &&
							project?.Images.map((image, index) => {
								return (
									<Image
										key={image}
										src={image}
										alt={`Image ${index}`}
										width='200px'
										height='113px'
										onClick={() => {
											setImgModal({ Title: `Image ${index + 1}`, image })
											SetImagesArray()
										}}
									/>
								)
							})}
					</div>
				</div>
				<div className={styles.Technology}>
					<h3>Technology Used:</h3>
					{project?.Technology?.map((tech) => {
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
			</div>
		)
	}
}
