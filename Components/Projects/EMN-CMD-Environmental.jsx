import styles from '../../styles/Project.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectDetails({ setImgModal, setImages }) {
	return (
		<div className={styles.Details}>
			<h4>EMIS Waste Stream Request</h4>
			<div className={styles.ImgBlock}>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Info.png?alt=media&token=ee94ddae-c984-4d35-be87-83f13be3c1f1'
					title='EMIS Waste Stream Request Form'
					alt='EMIS Waste Stream Request Form'
					width='400'
					height='225'
					onClick={() => {
						setImgModal({
							Title: `EMIS Waste Stream Request Form`,
							image:
								'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Info.png?alt=media&token=ee94ddae-c984-4d35-be87-83f13be3c1f1',
						})
						setImages([
							{
								Title: 'EMIS WasteStream Request Form',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Info.png?alt=media&token=ee94ddae-c984-4d35-be87-83f13be3c1f1',
							},
							{
								Title: 'EMIS WasteStream Components Form',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Components.png?alt=media&token=921e4cd6-74d9-48d1-97be-edf2cd0625a6',
							},
							{
								Title: 'EMIS WasteStream Workflow Details',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Workflow%20Details.png?alt=media&token=0f93e9ae-832c-4542-9ce8-16d848745a43',
							},
						])
					}}
				/>
			</div>
			<p>
				This project involved the development of a dynamic Power App designed to
				streamline and enhance the waste management process within our
				organization. The Power App required users to input crucial information
				about the waste material type and then routed it for approval through
				our designated Environmental Coordinator. The Environmental Coordinator
				was responsible for assigning the appropriate 'Waste Stream' data and
				assigning each request a unique title. Upon successful completion, the
				ticket status was marked as 'Complete,' and an automated notification
				was sent to the initiator or their assigned 'Notification Contact'.
				<br />
				This Waste Management Power App has significantly improved the
				efficiency of the waste material handling processes, reduced
				administrative overhead, and enhanced communication among stakeholders.
				It ensures that waste materials are managed in a compliant and
				environmentally responsible manner while providing a user-friendly
				experience for all involved parties.
			</p>
			<hr />
			<h4>Environmental Review Checklist</h4>
			<div className={styles.ImgBlockRight}>
				<div>
					<Image
						src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Main.png?alt=media&token=ff6a8ec3-fc82-4815-b06f-1149d11c0cf5'
						title='Environmental Review Checklist Form'
						alt='Environmental Review Checklist Form'
						width='400'
						height='225'
						onClick={() => {
							setImgModal({
								Title: `Environmental Review Checklist Form`,
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Main.png?alt=media&token=ff6a8ec3-fc82-4815-b06f-1149d11c0cf5',
							})
							setImages([
								{
									Title: 'Environmental Review Checklist Main',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Main.png?alt=media&token=ff6a8ec3-fc82-4815-b06f-1149d11c0cf5',
								},
								{
									Title: 'Environmental Review Checklist Air',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Air.png?alt=media&token=afbbc29c-6591-4c92-be11-f55f317d7718',
								},
								{
									Title: 'Environmental Review Checklist State',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20State.png?alt=media&token=449d03d1-6322-45da-9fbb-b2146bf28f98',
								},
								{
									Title: 'Environmental Review Checklist NSPS',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20NSPS.png?alt=media&token=2ae940e4-7102-4ddb-b76d-c723e81351b6',
								},
								{
									Title: 'Environmental Review Checklist MACT',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20MACT.png?alt=media&token=987d7d09-3d57-4154-ad09-3d74864062d7',
								},
								{
									Title: 'Environmental Review Checklist Waste',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Waste.png?alt=media&token=a16b39fb-74ec-41a4-b789-4c68137bce28',
								},
								{
									Title: 'Environmental Review Checklist Other',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Other.png?alt=media&token=4c82c724-354f-44d7-8743-29eefb0c1230',
								},
								{
									Title: 'Environmental Review Checklist Reviewers',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FERC%20Reviewers.png?alt=media&token=463222f2-c78e-4341-bb7d-eaa6bb03aa33',
								},
							])
						}}
					/>
				</div>
			</div>
			<p>
				As part of a larger workflow and application (
				<Link href='EMN-Capital-&-Expense-Project-Tracker'>
					Capital & Expense Projects
				</Link>
				), this standalone Power App plays a pivotal role in ensuring that all
				environmental requirements are diligently met for operational
				modifications. The app consists of eight comprehensive sections designed
				to systematically identify potential hazards or compliance issues
				associated with a given project.
				<br />
				This Environmental Compliance Assessment Power App empowers
				organizations to proactively address environmental concerns and
				regulatory requirements for operational modifications. By facilitating a
				systematic assessment process and enabling timely corrective actions, it
				contributes to the sustainable and responsible management of projects,
				fostering environmental stewardship and compliance.
			</p>
			<hr />
			<h4>Oil Storage Inspection Form</h4>
			<div className={styles.ImgBlock}>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FOil%20Storage%20Inspection.png?alt=media&token=ffe40a6d-7962-4d8c-b58f-3eb5f81b8cd3'
					title='Oil Storage Inspection Form'
					alt='Oil Storage Inspection Form'
					width='400'
					height='225'
					onClick={() => {
						setImgModal({
							Title: `Oil Storage Inspection Form`,
							image:
								'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FOil%20Storage%20Inspection.png?alt=media&token=ffe40a6d-7962-4d8c-b58f-3eb5f81b8cd3',
						})
						setImages([
							{
								Title: 'Oil Storage Inspection Form',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FOil%20Storage%20Inspection.png?alt=media&token=ffe40a6d-7962-4d8c-b58f-3eb5f81b8cd3',
							},
							{
								Title: 'Oil Storage Inspection Form',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FOil%20Storage%20Inspection%202.png?alt=media&token=13b93f26-712d-4c23-8195-3d814ff363e1',
							},
						])
					}}
				/>
			</div>
			<p>
				This form involved the development of a versatile app designed to
				capture vital information during weekly environmental inspections. The
				distinguishing feature of this app is its dynamic configuration, which
				adapts the questions and inspection locations based on the user's
				selections for area.
				<br />
				This app ensures weekly oil storage containment inspections are
				collected efficiently and accurately. By tailoring the inspection
				process to each unique scenario, it enhances data integrity and supports
				environmental compliance.
			</p>
			<hr />
			<h4>Surplus & Off Quality Form</h4>
			<div className={styles.ImgBlockRight}>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FSOQ%20Form.png?alt=media&token=2bc5efcc-e322-4fe4-92e7-84af7534233b'
					title='Surplus & Off Quality Material Request Form'
					alt='Surplus & Off Quality Material Request Form'
					width='400'
					height='225'
					onClick={() => {
						setImgModal({
							Title: `Surplus & Off Quality Material Request Form`,
							image:
								'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FSOQ%20Form.png?alt=media&token=2bc5efcc-e322-4fe4-92e7-84af7534233b',
						})
						setImages([
							{
								Title: 'Surplus & Off Quality Material Request Form',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FSOQ%20Form.png?alt=media&token=2bc5efcc-e322-4fe4-92e7-84af7534233b',
							},
							{
								Title: 'Surplus & Off Quality Material Home Page',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FSOQ%20Home.png?alt=media&token=04135aed-ffe1-48cc-9236-e263569c90c9',
							},
							{
								Title: 'Surplus & Off Quality Material Workflow',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FSOQ%20Workflow.png?alt=media&token=c9e244b5-84f9-4d97-ad1f-5a5bc1b8a4e7',
							},
						])
					}}
				/>
			</div>
			<p>
				This form facilitates the efficient management of surplus or off-quality
				material within the organization. The primary goal is to ensure that
				users provide sufficient information for environmental, business,
				quality, and production records personnel to make informed decisions
				regarding the disposal of such material. The app incorporates a
				multi-step routing process, collecting approvals and comments from
				various organizational units at each stage to streamline communication
				and decision-making.
				<br />
				The SOQ Form is a powerful tool that empowers organizations to make
				well-informed decisions regarding surplus or off-quality material. By
				involving key departments in the process and maintaining a transparent
				record of decisions, it supports environmentally responsible practices
				and efficient resource management.
			</p>
			<hr />
			<h4>RCRA Form</h4>
			<div className={styles.ImgBlock}>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FRCRA.png?alt=media&token=022650f5-faa4-4ac2-9859-d074c3587ea2'
					title='RCRA Inspection Form'
					alt='RCRA Inspection Form'
					width='400'
					height='225'
					onClick={() => {
						setImgModal({
							Title: `RCRA Inspection Form`,
							image:
								'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FRCRA.png?alt=media&token=022650f5-faa4-4ac2-9859-d074c3587ea2',
						})
						setImages([
							{
								Title: 'RCRA Inspection Form',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FSOQ%20Form.png?alt=media&token=2bc5efcc-e322-4fe4-92e7-84af7534233b',
							},
						])
					}}
				/>
			</div>
			<p>
				This application facilitates equipment inspections by prompting users to
				select the area and equipment for assessment. The app also empowers
				users to assign action items to the necessary personnel if needed. This
				data collection process is carried out regularly to ensure the company's
				compliance with environmental regulations under the Resource
				Conservation and Recovery Act (RCRA).
			</p>
		</div>
	)
}
