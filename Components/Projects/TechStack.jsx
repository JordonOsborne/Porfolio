import styles from '../../styles/Projects.module.scss'
import Image from 'next/image'

export default function TechStack({ data, selected, setTech }) {
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

	return (
		<div className={styles.TechStack}>
			{techStack.map((tech) => {
				return (
					<div
						key={tech}
						className={styles.tech}
						onClick={() => setTech(tech)}
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
