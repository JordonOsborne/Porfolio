import styles from '../../styles/Project.module.scss'
import Input from '../Reusable/Input'
import Upload from '../Reusable/Upload'
import MultiLine from '../Reusable/MultiLine'
import MultiSelect from '../Reusable/MultiSelect'
import Image from 'next/image'
import FirebaseAPI from '../../Context/FirebaseAPI'
import { useRouter } from 'next/router'
import { MdAccountCircle } from 'react-icons/md'
import { SiPowerapps, SiPowerautomate, SiPowerbi } from 'react-icons/si'
import { useState, useContext, useEffect } from 'react'

export default function Main_Edit({ project }) {
	const { setFormData } = useContext(FirebaseAPI)
	const router = useRouter()
	const [isCardMockUp, setIsCardMockUp] = useState(false)
	useEffect(() => {
		setFormData(project)
	}, [project])

	return (
		<form name='Projects'>
			<div
				className={styles.Heading}
				data-edit='true'
			>
				<h1>
					<Input
						Id='Project'
						Placeholder='Project Title'
						Default={project?.Project}
					/>
				</h1>
				<div className={styles.Stats}>
					<span>
						<MdAccountCircle />
						<h3>
							<div>
								<Input
									Id='Users'
									Placeholder={project.Users}
									Default={project.Users}
								/>
								<span>Users</span>
							</div>
						</h3>
					</span>
					<span>
						<SiPowerapps />
						<h3>
							<div>
								<Input
									Id='Forms'
									Placeholder={project.Forms}
									Default={project.Forms}
								/>
								<span>Forms</span>
							</div>
						</h3>
					</span>
					<span>
						<SiPowerautomate />
						<h3>
							<div>
								<Input
									Id='Automations'
									Placeholder={project.Automations}
									Default={project.Automations}
								/>
								<span>Automations</span>
							</div>
						</h3>
					</span>
					<span>
						<SiPowerbi />
						<h3>
							<div>
								<Input
									Id='Reports'
									Placeholder={project.Reports}
									Default={project.Reports}
								/>
								<span>Reports</span>
							</div>
						</h3>
					</span>
				</div>
				<p>
					<MultiLine
						Id='Description'
						Default={project.Description}
						Placeholder={project.Description}
						Rows={6}
					/>
				</p>
				<div className={styles.Images}>
					<div>
						<div className={styles.MockUpSelector}>
							<div
								aria-selected={isCardMockUp}
								onClick={() => setIsCardMockUp(true)}
							>
								Card
							</div>
							<div
								aria-selected={!isCardMockUp}
								onClick={() => setIsCardMockUp(false)}
							>
								Mock-Up
							</div>
						</div>
						{isCardMockUp ? (
							<Upload
								Id='CardMockUpImg'
								Label='Card Mock-Up Image'
								Types={['image/png, image/jpeg, image/svg']}
								filePath={`${project?.Company?.id}/Mock-Up_Cards/${router.query.Id}.jpg`}
								Source={`/img/CardMockUp.png`}
							/>
						) : (
							<Upload
								Id='MockUpImg'
								Label='Mock-Up Image'
								Types={['image/png, image/jpeg, image/svg']}
								filePath={`${project?.Company?.id}/Mock-Ups/${router.query.Id}.jpg`}
								Source={`/img/MockUp.png`}
							/>
						)}
					</div>
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
									/>
								)
							})}
						<Upload
							Id='Images'
							Label='Project Image'
							Types={['image/png, image/jpeg, image/svg']}
							filePath={`${project?.Company?.id}/Images/${router.query.Id}`}
							Source={project?.Images}
							Multiple={true}
						/>
					</div>
				</div>
				<div className={styles.Technology}>
					<MultiSelect
						Id='Technology'
						Label='Technology Used'
						Default={project?.Technology ? project.Technology : []}
						Options={[
							'WIX',
							'JavaScript',
							'HTML',
							'CSS',
							'SQL',
							'Firebase',
							'React',
							'Next JS',
							'SharePoint',
							'Power Apps',
							'Power Automate',
							'Power BI',
						]}
					/>
				</div>
			</div>
		</form>
	)
}
