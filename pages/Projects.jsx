import Head from 'next/head'
import Header from '../Components/Header'
import UserPanel from '../Components/UserPanel'
import TechStack from '../Components/Projects/TechStack'
import ProjectCard from '../Components/Projects/ProjectCard'
import { MdAccountCircle } from 'react-icons/md'
import { SiPowerapps, SiPowerautomate, SiPowerbi } from 'react-icons/si'
import Image from 'next/image'
import styles from '../styles/Projects.module.scss'
import FirebaseAPI from '../Context/FirebaseAPI'
import { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'

export default function Projects() {
	const router = useRouter()
	const { GetData, data } = useContext(FirebaseAPI)
	const [projects, setProjects] = useState(data)
	const [tech, setTech] = useState()
	const [stats, setStats] = useState({
		Users: 0,
		Forms: 0,
		Automations: 0,
		Reports: 0,
	})

	useEffect(() => {
		if (router.isReady) {
			setTech(router.query?.Tech)
		}
		const GetProjectData = async (tech) => {
			const sortBy = { field: 'Date', type: 'desc' }
			const data = await GetData('Projects', null, sortBy)
			if (!tech) {
				setProjects(data)
				SetStats(data)
			} else {
				const dataFiltered = data.filter(HasTechnology)
				setProjects(dataFiltered)
				SetStats(dataFiltered)
			}
		}
		GetProjectData(tech)
	}, [router.query, tech])

	const HasTechnology = (project) => {
		return project.Technology.includes(tech)
	}

	const SetStats = (projects) => {
		const stats = { Users: 0, Forms: 0, Automations: 0, Reports: 0 }
		projects.forEach((project) => {
			const Users = +stats.Users + +project.Users
			const Forms = +stats.Forms + +project.Forms
			const Automations = +stats.Automations + +project.Automations
			const Reports = +stats.Reports + +project.Reports
			stats = { ...stats, ...{ Users, Forms, Automations, Reports } }
		})
		setStats(stats)
	}

	const RoundValues = (value) => {
		if (value > 1000) {
			return '1000+'
		}
		if (value > 500) {
			return '500+'
		} else {
			return value
		}
	}

	return (
		<div id='Page'>
			<Head>
				<title>Jordon Osborne | Porfolio</title>
				<meta
					name='description'
					content='I have worked in SharePoint and Power Apps for several years. During this time I have completed a variety of different projects, many of which can be viewed on my porfolio.'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Header />
			<div id={styles.Admin}>
				<UserPanel />
				<div className={styles.TechSelected}>
					<div>
						{tech && (
							<Image
								src={tech ? `/Icons/${tech}.png` : `/Icons/All.png`}
								alt={tech ? tech : 'All Projects'}
								width='40'
								height='40'
							/>
						)}
						<h1>{tech ? `${tech} Projects` : 'My Porfolio'}</h1>
					</div>
					<div className={styles.Data}>
						<div data-stats={stats.Users}>
							<MdAccountCircle />
							<p>{`${RoundValues(stats.Users)} Users`}</p>
						</div>
						<div data-stats={stats.Forms}>
							<SiPowerapps />
							<p>{`${RoundValues(stats.Forms)} Forms`}</p>
						</div>
						<div data-stats={stats.Automations}>
							<SiPowerautomate />
							<p>{`${RoundValues(stats.Automations)} Flows`}</p>
						</div>
						<div data-stats={stats.Reports}>
							<SiPowerbi />
							<p>{`${RoundValues(stats.Reports)} Reports`}</p>
						</div>
					</div>
				</div>
				<TechStack
					data={projects}
					selected={tech}
				/>
				<main>
					<div className={styles.TechFilter}></div>
					<div className={styles.Projects}>
						{projects.map((Project) => (
							<ProjectCard
								Info={Project}
								key={Project.id}
							/>
						))}
					</div>
					<footer
						className={styles.Footer}
					>{`Total Project Count: ${projects.length}`}</footer>
				</main>
			</div>
		</div>
	)
}
