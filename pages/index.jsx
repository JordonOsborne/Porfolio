import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../Components/Header'
import Link from 'next/link'
import RecentWork from '../Components/RecentWork'
import CodeBackground from '../Components/CodeRain'
import ContactForm from '../Components/ContactForm'
import InteractiveForms from '../Components/InteractiveForms'

export default function Home() {
	return (
		<div id={styles.Home}>
			<Head>
				<title>Jordon Osborne | Home</title>
				<meta
					name='description'
					content='Welcome to my Porfolio website.'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<CodeBackground />
			<Header />
			<main className={styles.main}>
				<img
					src='/img/showcase.svg'
					alt='Showcase Image'
				/>
				<div>
					<h1>
						Hi! I am Jordon Osborne the
						<span>UI/UX Developer</span>
					</h1>
					<p className={styles.lead}>
						I am a UI/UX Designer and Developer. I can help get your business on
						the web and give your clients the best experience possible.
					</p>
					<div className={styles.action}>
						<Link href='/Projects'>
							<a className={styles.primary}>View my Work</a>
						</Link>
						<Link href='/Resume'>
							<a className={styles.secondary}>Resume</a>
						</Link>
					</div>
					<div className={styles.RecentWork}>
						<h3 className={styles.title}>My Recent Work</h3>
						<hr className={styles.divider} />
						<RecentWork />
					</div>
				</div>
			</main>
			<section className={styles.section}>
				<h3 className={styles.title}>My Experience</h3>
				<hr className={styles.divider} />
				<p className={styles.sectionLead}>
					I have over 6 years of experience designing and developing forms,
					managing websites for Eastman Chemical Company using the SharePoint
					platform. This experience has lead me to other web development
					platforms and tool sets such as Capuware and WIX. While the large
					mjority of my time is spent using CMS (Content Managemt Systems), I
					have also obtained a wide array of programming knowledge using HTML,
					CSS, and Javascript.
				</p>
				<div className={styles.grid}>
					<div>
						<img
							src='/img/Websites.svg'
							alt='Websites'
							className={styles.image}
						/>
						<h3>Over 35 Websites Managed</h3>
					</div>
					<div>
						<img
							src='/img/Users.svg'
							alt='Websites'
							className={styles.image}
						/>
						<h3>Over 500 Site Users</h3>
					</div>
					<div>
						<img
							src='/img/Form.svg'
							alt='Websites'
							className={styles.image}
						/>
						<h3>Over 200 Forms Created</h3>
					</div>
					<div>
						<img
							src='/img/Charts.svg'
							alt='Websites'
							className={styles.image}
						/>
						<h3>Over 20 Reports Built</h3>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<h3 className={styles.title}>My Pricing</h3>
				<hr className={styles.divider} />
				<p className={styles.sectionLead}>
					Every website and company has different needs, and my goal is to
					tailor my pricing to their needs. While most web development companies
					provide you with a high end price and offer more services than a local
					business needs, I allow my customers to customize their services. Get
					your{' '}
					<a
						href=''
						title='Get your free site quote!'
					>
						free site quote
					</a>{' '}
					and see how much it will cost for me to build your website.
				</p>
				<table className={styles.table}>
					<thead>
						<tr className={styles.tableHeader}>
							<th>Services</th>
							<th>JOsborne.dev</th>
							<th>
								<a
									href='https://www.wix.com/upgrade/website'
									title='View WIX Pricing Plan'
								>
									WIX
								</a>
							</th>
							<th>SquareSpace</th>
							<th>Holston.Digital</th>
							<th>Cost</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Logo Creation</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Domain Name</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>SEO</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Web Analytics</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>CMS</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Site Storage</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Ecommerce</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Custom Domain</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Site Support</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Total</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tfoot>
				</table>
			</section>
			<section className={styles.section}>
				<h3 className={styles.title}>Get the Answers You Need</h3>
				<hr className={styles.divider} />
				{/* <div className={styles.ContactForm}>
					<h3 className={styles.title}>Contact Me</h3>
					<p className={styles.lead}>
						Have questions or like what you see? Please send me message and I
						will get back with you within 24 hours.
					</p>
					<ContactForm />
				</div> */}
				<InteractiveForms />
			</section>
			<footer className={styles.footer}></footer>
		</div>
	)
}
