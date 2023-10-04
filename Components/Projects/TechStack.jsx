import styles from '../../styles/Projects.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function TechStack({ data, selected }) {
	const router = useRouter()
	let techStack = []
	data.map((project) => {
		techStack = [...new Set([...techStack, ...project.Technology])]
	})

	const getCount = (tech) => {
		const count = data.filter((project) => {
			return project.Technology.includes(tech)
		}).length
		return count
	}

	const setQuery = (tech) => {
		tech == selected
			? router.push({ pathname: '/Projects' })
			: router.push({ pathname: '/Projects', query: { Tech: tech } })
	}

	return (
		<div className={styles.TechStack}>
			{techStack.map((tech) => {
				return (
					<div
						key={tech}
						className={styles.tech}
						onClick={() => setQuery(tech)}
						aria-selected={tech === selected}
					>
						<Image
							src={`/Icons/${tech}.png`}
							alt={tech}
							width='30'
							height='30'
						/>
						<span className={styles.Count}>{getCount(tech)}</span>
						<h3>{tech}</h3>
					</div>
				)
			})}
		</div>
	)
}
