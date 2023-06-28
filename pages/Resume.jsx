import Header from '../Components/Header'
import styles from '../styles/Resume.module.scss'
import { MdLocationOn, MdEmail, MdWork } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Resume() {
	const [isShrunk, setIsShrunk] = useState(false)
	const [scrollY, setScrollY] = useState(0)
	const [headerY, setHeaderY] = useState(null)
	const [workHistoryY, setWorkHistoryY] = useState(null)
	const [skillsY, setSkillsY] = useState(null)
	const header = useRef(null)
	const workHistory = useRef(null)
	const skills = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
			setHeaderY(header.current?.getClientRects()[0].bottom)
			setWorkHistoryY(workHistory.current?.getClientRects()[0].bottom)
			setSkillsY(skills.current?.getClientRects()[0].bottom)
			setIsShrunk((isShrunk) => {
				const headerY = header.current.getClientRects()[0].bottom
				if (!isShrunk && window.scrollY > headerY - 20) {
					return true
				}
				if (isShrunk && window.scrollY < headerY - 100) {
					return false
				}
				return isShrunk
			})
		}
		handleScroll()

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const sectionHeader = (y) => {
		if (!isShrunk) {
			return
		}
		if (skillsY < headerY) {
			return (
				<div className={styles.Title}>
					<GiSkills />
					<h2>Skills</h2>
				</div>
			)
		}
		if (workHistoryY < headerY) {
			return (
				<div className={styles.Title}>
					<MdWork />
					<h2>Work History</h2>
				</div>
			)
		}
		return
	}

	return (
		<div id='Page'>
			<Header />
			<main id={styles.Resume}>
				<header
					className={styles.Header}
					data-shrink={isShrunk}
					ref={header}
				>
					<div className={styles.Profile}>
						<Image
							src='/img/Profile.jpg'
							alt='Jordoon Osborne'
							height={isShrunk ? '50px' : '125px'}
							width={isShrunk ? '50px' : '125px'}
						/>
					</div>
					<div className={styles.Info}>
						<h1>Jordon Osborne</h1>
						{!isShrunk && (
							<div className={styles.Contact}>
								<p>
									<MdLocationOn />
									Church Hill, TN
								</p>
								<p>
									<MdEmail />
									JordonOsborne@outlook.com
								</p>
								<p>
									<FaPhoneAlt />
									(423) 276-1041
								</p>
							</div>
						)}
						{sectionHeader(scrollY)}
					</div>
				</header>
				<section className={styles.History}>
					<div
						className={styles.Title}
						ref={workHistory}
					>
						<MdWork />
						<h2>Work History</h2>
					</div>
					<div className={styles.Employer}>
						<Image
							src='/img/Eastman.png'
							alt='Eastman Chemical Company'
							height='40px'
							width='220px'
						/>
						<div className={styles.Employer}>
							<h3>
								Eastman Chemical Company{' '}
								<span aria-hidden={isShrunk}>(Kingsport, TN)</span>
							</h3>
							<h3>2011 - Current</h3>
						</div>
					</div>
					<div className={styles.Card}>
						<div>
							<h4>MIS Technologist</h4>
							<h4>June 2021 - Current</h4>
						</div>
						<div>
							<h5>Responsibilities</h5>
							<ul>
								<li>
									Manage IT-related projects to drive improvements in
									productivity, quality, compliance, and process optimization.
								</li>
								<li>
									Serve as the administrator and oversee configuration,
									maintenance, enhancements, and design of SharePoint sites.
								</li>
								<li>
									Coordinate, monitor, and assign security permissions for
									various Manufacturing Information Systems, including SAP,
									LIMS, PIMS, SharePoint, Windows, Microsoft Power Apps, and
									custom database and applications.
								</li>
								<li>
									Lead training and provide guidance to technical staff for best
									practices in Power Apps, SharePoint, and Power BI development.
								</li>
							</ul>
							<h5>Accomplishments</h5>
							<ul>
								<li>
									Successfully migrated over 50 SharePoint 2010-2013 on-premise
									sites to O365 SharePoint, ensuring data integrity. Revamped
									multiple home pages using the modern SharePoint experience,
									resulting in improved visual aesthetics and user experience.
								</li>
								<li>
									Configured more than 100 Power Automates to streamline
									operational tasks, eliminate redundancies, and automate
									notifications and reporting processes. This implementation
									resulted in significant efficiency improvements, optimizing
									communication and saving nearly 100 man-hours annually.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.Card}>
						<div>
							<h4>Production Record Specialists</h4>
							<h4>March 2018 - June 2021</h4>
						</div>
						<div>
							<h5>Responsibilities</h5>
							<ul>
								<li>
									Perform monthly inventory reconciliation, ensuring accurate
									and up-to-date inventory records.
								</li>
								<li>
									Monitor operational production records daily to verify
									accuracy against electronic data stored in SAP.
								</li>
								<li>
									Support and enhance MIS SharePoint sites and forms related to
									production.
								</li>
								<li>
									Coordinate collection of master data for new materials and
									recipes.
								</li>
							</ul>
							<h5>Accomplishments</h5>
							<ul>
								<li>
									Created a web application for contracting services to monitor
									and update warehouse inventory records stored on SharePoint
									and PI. The application streamlined processes, eliminated
									redundancy, and reduced typographical errors.
								</li>
								<li>
									Designed PI Vision displays tailored to the manufacturing
									areas I supported, enabling real-time monitoring of tank
									inventory changes between PI and SAP data, providing valuable
									insights for inventory management.
								</li>
								<li>
									Developed an electronic record management system to store and
									retain monthly reconciliation documents in compliance with
									company auditing standards.
								</li>
								<li>
									Developed multiple forms and SharePoint lists to efficiently
									collect necessary information for tasks such as material
									creation and warehouse transfers.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.Card}>
						<div>
							<h4>Quality Assurance Assistant</h4>
							<h4>June 2016 - March 2018</h4>
						</div>
						<div>
							<h5>Responsibilities</h5>
							<ul>
								<li>
									Serve as the administrator and oversee configuration,
									maintenance, enhancements, and design of Quality Assurance
									SharePoint sites.
								</li>
								<li>
									Maintaining document management systems, ensuring compliance
									with ISO standards and Eastman internal requirements.
								</li>
								<li>
									Accurately enter vendor quality data to ensure raw materials
									meet agreed specifications. Maintain organized and easily
									accessible records to facilitate efficient retrieval during
									audits.
								</li>
							</ul>
							<h5>Accomplishments</h5>
							<ul>
								<li>
									Implemented Certificat of Analysis (COA) file archival system,
									reducing retrieval time and improving data availability. This
									enabled the automation of data entry of vendor quality data,
									eliminating over 4 man hours of manual work on a daily basis.
								</li>
								<li>
									Developed a product responsibility contact database to enhance
									communication and collaboration between internal parties and
									quality representatives. This centralized resource improved
									accessibility to relevant contacts, ensuring efficient and
									effective communication across the organization.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.Card}>
						<div>
							<h4>Chemical Manufacturing Operator</h4>
							<h4>December 2014 - June 2016</h4>
						</div>
						<div>
							<h5>Responsibilities</h5>
							<ul>
								<li>
									Performed routine maintenance of manufacturing equipment,
									ensuring a safe and efficient operational environment.
								</li>
								<li>
									Conducted thorough investigations into manufacturing equipment
									issues, identifying root causes and implementing or
									communicating solutions to technical staff.
								</li>
								<li>
									Proactively identified potential maintenance needs and
									implementing preventive measures to optimize equipment
									performance.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.Card}>
						<div>
							<h4>LSE - Viscosity Lab Analyst</h4>
							<h4>May 2011 - May 2014</h4>
						</div>
						<div>
							<h5>Responsibilities</h5>
							<ul>
								<li>
									Prepare samples, reagents, and standards for testing,
									following specified protocols.
								</li>
								<li>
									Perform routine viscosity analyses on samples using
									established procedures and techniques.
								</li>
								<li>
									Adhere to laboratory safety protocols, maintain a clean and
									organized work area, and handle hazardous materials
									responsibly.
								</li>
								<li>
									Record test results and data using LIMS (Laboratory
									Information Management System).
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.Skills}>
					<div
						className={styles.Title}
						ref={skills}
					>
						<GiSkills />
						<h2>Skills</h2>
					</div>
					<ul>
						<li>
							Proficient in all Office 365 applications including SharePoint,
							Power Automate, Power Apps, and Power BI.
						</li>
						<li>
							Proficient in web development technologies including HTML, CSS,
							JavaScript, and React.
						</li>
						<li>
							Strong problem-solving and analytical skills to identify and
							address issues effectively.
						</li>
						<li>
							Detail-oriented with a focus on data accuracy and quality
							assurance.
						</li>
						<li>
							Excellent communication and collaboration abilities for effective
							teamwork
						</li>
					</ul>
				</section>
				<section className={styles.Education}>
					<div className={styles.Title}>
						<FaGraduationCap />
						<h2>Education</h2>
					</div>
					<div>
						<img
							src='/Img/ETSU.png'
							alt='ETSU Logo'
							width='75px'
							height='75px'
						/>
						<div className={styles.Info}>
							<h4>East Tennessee State University</h4>
							<h4>Johnson City, TN</h4>
							<h4>Bachelors of Science, Chemistry (ACS Concentration)</h4>
							<h4>Aug 2008 - Dec 2012</h4>
						</div>
					</div>
				</section>
				<section className={styles.References}>
					<h2>References</h2>
					<div className={styles.Contacts}>
						<a
							href='https://www.linkedin.com/in/bobhowerton/'
							className={styles.Card}
						>
							<Image
								src='https://media.licdn.com/dms/image/C5603AQFhedPzqw_fFw/profile-displayphoto-shrink_800_800/0/1628600364017?e=1692835200&v=beta&t=Zed6P8RZNmiPNRZ8VNBDjVha6ubEhSBf4tfakZ3rolg'
								alt='Bob Howerton'
								height='75px'
								width='75px'
							/>
							<div>
								<h3>Bob Howerton</h3>
								<h4>MIS Supervisor</h4>
								<h4>Mar 2018 - Sept 2021</h4>
							</div>
						</a>
						<a
							href='https://www.linkedin.com/in/myragrills/'
							className={styles.Card}
						>
							<Image
								src='https://media.licdn.com/dms/image/C4E03AQFrrjW7zh-Tbw/profile-displayphoto-shrink_800_800/0/1517698067633?e=1692835200&v=beta&t=90HIAsQAxFBdbF2nBSKXC-9CkmHn2pwal7QjUbZ9v-w'
								alt='Myra Crawford'
								height='75px'
								width='75px'
							/>
							<div>
								<h3>Myra Crawford</h3>
								<h4>Quality Assurance Supervisor</h4>
								<h4>Jan 2017 - Mar 2018</h4>
							</div>
						</a>
					</div>
				</section>
			</main>
		</div>
	)
}
