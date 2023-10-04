import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.scss'
import Header from '../Components/Header'
import { AiFillTrophy } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'

export default function About() {
	return (
		<div id={styles.About}>
			<Head>
				<title>Jordon Osborne | About</title>
				<meta
					name='description'
					content='Let me tell you a little about myself.'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Header />
			<main>
				<section className={styles.About}>
					<div className={styles.FamilyPhoto}>
						<Image
							src='/Img/FamilyPhoto.webp'
							alt='Family Photo'
							width='400'
							height='225'
						/>
					</div>
					<p>
						Hi! I'm Jordon Osborne, a dedicated father of two with a strong
						passion for programming. In my full-time role at Eastman Chemical
						Company, I specialize in crafting webpages, forms, and reports using
						Microsoft tools like Power Apps, Power BI, and Power Automate. My
						primary focus revolves around creating customized solutions to
						replace InfoPath forms, SharePoint Designer workflows, and improving
						user experiences by evolving the UI. I'm committed to bringing
						creativity and innovation to every project I undertake.
					</p>
				</section>
				<section className={styles.Certifications}>
					<div>
						<div className={styles.Award}>
							<FaGraduationCap />
							<h4>Bachelors Degree of Science</h4>
							<p>
								Graduated from East Tennessee State University with a major in
								Chemistry and a minor in mathematics.
							</p>
						</div>
						<div className={styles.Award}>
							<AiFillTrophy />
							<h4>Skill Assessment Badge (SharePoint)</h4>
							<p>
								Only people who score in the top 30% earn a badge. Over 472
								thousand LinkedIn members attempted this assessment.
							</p>
						</div>
						<div className={styles.Award}>
							<AiFillTrophy />
							<h4>Skill Assessment Badge (CSS)</h4>
							<p>
								Only people who score in the top 30% earn a badge. Over 1.5
								million LinkedIn members attempted this assessment.
							</p>
						</div>
					</div>
				</section>
				<hr />
				<section className={styles.Technology}>
					<h3>Tools I Use</h3>
					<div>
						<Link
							href={{ pathname: '/Projects', query: { Tech: 'SharePoint' } }}
						>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/SharePoint.png'
									alt='SharePoint'
									width='50'
									height='50'
								/>
								<h4>SharePoint</h4>
							</div>
						</Link>
						<Link
							href={{ pathname: '/Projects', query: { Tech: 'Power Apps' } }}
						>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/Power Apps.png'
									alt='Power Apps'
									width='50'
									height='50'
								/>
								<h4>Power Apps</h4>
							</div>
						</Link>
						<Link
							href={{
								pathname: '/Projects',
								query: { Tech: 'Power Automate' },
							}}
						>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/Power Automate.png'
									alt='Power Automate'
									width='50'
									height='50'
								/>
								<h4>Power Automate</h4>
							</div>
						</Link>
						<Link href={{ pathname: '/Projects', query: { Tech: 'Power BI' } }}>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/Power BI.png'
									alt='Power BI'
									width='50'
									height='50'
								/>
								<h4>Power BI</h4>
							</div>
						</Link>
						<Link href={{ pathname: '/Projects', query: { Tech: 'HTML' } }}>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/HTML.png'
									alt='HTML'
									width='50'
									height='50'
								/>
								<h4>HTML</h4>
							</div>
						</Link>
						<Link href={{ pathname: '/Projects', query: { Tech: 'CSS' } }}>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/CSS.png'
									alt='CSS'
									width='50'
									height='50'
								/>
								<h4>CSS</h4>
							</div>
						</Link>
						<Link
							href={{ pathname: '/Projects', query: { Tech: 'JavaScript' } }}
						>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/JavaScript.png'
									alt='JavaScript'
									width='50'
									height='50'
								/>
								<h4>JavaScript</h4>
							</div>
						</Link>
						<Link href={{ pathname: '/Projects', query: { Tech: 'SQL' } }}>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/SQL.png'
									alt='SQL'
									width='50'
									height='50'
								/>
								<h4>SQL Manager</h4>
							</div>
						</Link>
						<Link href={{ pathname: '/Projects', query: { Tech: 'Next JS' } }}>
							<div className={styles.TechBlock}>
								<Image
									src='/Icons/Next JS.png'
									alt='Next JS'
									width='50'
									height='50'
								/>
								<h4>Next JS</h4>
							</div>
						</Link>
					</div>
				</section>
			</main>
		</div>
	)
}
