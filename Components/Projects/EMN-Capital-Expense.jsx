import styles from '../../styles/Project.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectDetails({ setImgModal, setImages }) {
	return (
		<div className={styles.Details}>
			<h4>Capital & Expense Workflow</h4>
			<div className={styles.ImgBlock}>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_Workflow.png?alt=media&token=89c9ff26-4fd7-4ff7-b50e-4456fc936d91'
					title='Capital & Expense Project Workflow'
					alt='Capital & Expense Project Workflow'
					width='400'
					height='225'
					onClick={() => {
						setImgModal({
							Title: `Capital & Expense Project Worklow`,
							image:
								'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_Workflow.png?alt=media&token=89c9ff26-4fd7-4ff7-b50e-4456fc936d91',
						})
						setImages([
							{
								Title: `Capital & Expense Project Worklow`,
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_Workflow.png?alt=media&token=89c9ff26-4fd7-4ff7-b50e-4456fc936d91',
							},
							{
								Title: 'Environmental Review Checklist (ERC) Workflow',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Workflow.png?alt=media&token=14b5782c-338d-4c0f-990c-578cc344d40f',
							},
							{
								Title: 'Project Validation & Ranking Tool (PVRT) Workflow',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Workflow.png?alt=media&token=c0711b7d-a6d4-4300-88e0-25d4d3012056',
							},
							{
								Title: 'Project Approval Workflow',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Workflow%20Details.png?alt=media&token=0f93e9ae-832c-4542-9ce8-16d848745a43',
							},
						])
					}}
				/>
			</div>
			<p>
				This project involved the development of a specialized project tracking
				application for an internal division within the Tennessee Operations
				plant. The application's primary goal was to streamline a complex
				process that required the initiation and completion of two separate data
				sources. Crucially, the external data sources needed to be finalized
				before submission to upper management for approval. This intricate and
				time-consuming process was consolidated and validated within the
				application to ensure efficient data entry by users.
				<br />
				<br />
				The project tracking application consisted of three main components:
			</p>
			<h4>1. Environmental Review Checklists (ERC)</h4>
			<div>
				<div className={styles.ImgBlockRight}>
					<Image
						src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Workflow.png?alt=media&token=14b5782c-338d-4c0f-990c-578cc344d40f'
						title='Environmental Review Checklist (ERC) Workflow'
						alt='Environmental Review Checklist (ERC) Workflow'
						width='400'
						height='225'
						onClick={() => {
							setImgModal({
								Title: `Environmental Review Checklist (ERC) Workflow`,
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Workflow.png?alt=media&token=14b5782c-338d-4c0f-990c-578cc344d40f',
							})
							setImages([
								{
									Title: 'Environmental Review Checklist (ERC) Workflow',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Workflow.png?alt=media&token=14b5782c-338d-4c0f-990c-578cc344d40f',
								},
								{
									Title: 'Environmental Review Checklist Main',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC.png?alt=media&token=0f1a8901-63f9-4e75-87ed-dad7dec0cfa5',
								},
								{
									Title: 'Environmental Review Checklist Air',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Air.png?alt=media&token=719d43e0-984b-4cbc-9dbb-f0041794490c',
								},
								{
									Title: 'Environmental Review Checklist State',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_State.png?alt=media&token=682dcb1b-0e4e-4bcc-a8d2-33e02bffe211',
								},
								{
									Title: 'Environmental Review Checklist NSPS',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_NSPS.png?alt=media&token=cfa026bc-8c19-4a3d-8671-05b28cbfbbc9',
								},
								{
									Title: 'Environmental Review Checklist MACT',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_MACT.png?alt=media&token=ff2d78a8-6ac7-4f07-a307-f988cc140b1b',
								},
								{
									Title: 'Environmental Review Checklist Water/Waste',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Waste.png?alt=media&token=1f9e2d13-55c4-410a-a144-af46da68a2c0',
								},
								{
									Title: 'Environmental Review Checklist Other',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Other.png?alt=media&token=91092fc5-3c12-455e-a989-532de13bec6f',
								},
								{
									Title:
										'Environmental Review Checklist Reviews & Action Items',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_ERC_Reviews.png?alt=media&token=afbd4dd1-06d5-4c88-9045-49e4ee918111',
								},
							])
						}}
					/>
				</div>
				<p>
					The first component, known as the ERC, comprised a multistep form
					designed to assess and confirm that projects met environmental
					requirements. This step was crucial to ensure that all projects
					adhered to environmental regulations and standards. This portion of
					the application pulls its design and layout from the standalone
					application found on the{' '}
					<Link href='EMN-CMD-Environmental'>CMD Environmenal</Link> site.
				</p>
			</div>
			<h4>2. Project Validation and Ranking Tool (PVRT)</h4>
			<div>
				<div className={styles.ImgBlockRight}>
					<Image
						src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Workflow.png?alt=media&token=c0711b7d-a6d4-4300-88e0-25d4d3012056'
						title='Project Validation and Ranking Tool Workflow'
						alt='Project Validation and Ranking Tool Workflow'
						width='400'
						height='225'
						onClick={() => {
							setImgModal({
								Title: `Project Validation and Ranking Tool Workflow`,
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Workflow.png?alt=media&token=c0711b7d-a6d4-4300-88e0-25d4d3012056',
							})
							setImages([
								{
									Title: 'Project Validation and Ranking Tool Workflow',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Workflow.png?alt=media&token=c0711b7d-a6d4-4300-88e0-25d4d3012056',
								},
								{
									Title: 'PVRT Information',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT.png?alt=media&token=45b0c932-8cc4-4973-a70d-fcd2dc8bb1ef',
								},
								{
									Title: 'PVRT General',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_General.png?alt=media&token=7bff2e14-91f5-4a0b-b53c-d11ae953b42c',
								},
								{
									Title: 'PVRT Capital',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Capital.png?alt=media&token=507f8bad-c0db-45d4-b1a5-5516c8a9d0ea',
								},
								{
									Title: 'PVRT Milestones',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Milestones.png?alt=media&token=c43c11bb-9cdd-4b1c-bf54-2c886cff17b8',
								},
								{
									Title: 'PVRT Questions',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Questions.png?alt=media&token=964dff90-c4d0-4269-a8cb-8243cedcd925',
								},
								{
									Title: 'PVRT Signatures',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Signatures.png?alt=media&token=79729b00-9eb3-4c4f-9554-f808a8f26d15',
								},
								{
									Title: 'PVRT Feedback',
									image:
										'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_PVRT_Feedback.png?alt=media&token=e8a0a6db-83f3-483b-a05f-5b909ee11e4f',
								},
							])
						}}
					/>
				</div>
				<p>
					The second component, known as the PVRT, served as a consolidated list
					for tracking projects and prioritizing them at the site level. This
					multistep form enabled the organization to efficiently manage and
					prioritize its projects based on various factors, including
					compliance, cost, and strategic importance.
				</p>
			</div>
			<h4>3. Dynamic Management Approval (Series)</h4>
			<div>
				<div className={styles.ImgBlockRight}>
					<Image
						src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Info.png?alt=media&token=ee94ddae-c984-4d35-be87-83f13be3c1f1'
						title='Dynamic Management Approval'
						alt='Dynamic Management Approval'
						width='400'
						height='225'
						onClick={() => {
							setImgModal({
								Title: `Dynamic Management Approval`,
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-CMD-Environmental%2FEMIS%20Info.png?alt=media&token=ee94ddae-c984-4d35-be87-83f13be3c1f1',
							})
							setImages([
								{
									Title: 'Dynamic Management Approval',
									image: '',
								},
								{
									Title: '',
									image: '',
								},
							])
						}}
					/>
				</div>
				<p>
					The last component, a series workflow approval, automatically assigned
					tasks based on preset defaults and project category selections made
					earlier. Initiators could re-assign tasks if needed due to personnel
					changes or absences, and task reminders prevented workflow delays.
					This system improved efficiency and adaptability in the approval
					process, facilitating timely decision-making and effective project
					management.
				</p>
			</div>
			<hr />
			<h4>Help Guides</h4>
			<div className={styles.ImgBlock}>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_Help.png?alt=media&token=4bc91eb1-2db9-4d95-a810-e435c72bb383'
					title='Capital & Expense Projects Help Guides'
					alt='Capital & Expense Projects Help Guides'
					width='400'
					height='225'
					onClick={() => {
						setImgModal({
							Title: `Capital & Expense Project Help Guides`,
							image:
								'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_Help.png?alt=media&token=4bc91eb1-2db9-4d95-a810-e435c72bb383',
						})
						setImages([
							{
								Title: 'Capital & Expense Project Help Guides',
								image:
									'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o/EMN%2FImages%2FEMN-Capital-%26-Expense-Project-Tracker%2FCMD_Capital_Projects_Help.png?alt=media&token=4bc91eb1-2db9-4d95-a810-e435c72bb383',
							},
							{
								Title: '',
								image: '',
							},
						])
					}}
				/>
			</div>
			<p>
				Included user-friendly 'Help Guides' within the application to
				facilitate user understanding. These guides featured workflow diagrams,
				calculation examples, definition searches, and video demonstrations,
				enhancing the application's usability and user experience.
			</p>
		</div>
	)
}
