import styles from '../styles/Projects.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import FirebaseAPI from '../Context/FirebaseAPI'
import { useContext, useEffect, useState, useRef } from 'react'

export default function RecentWork() {
	const { data, GetData } = useContext(FirebaseAPI)
	const [topThree, setTopThree] = useState([])
	const [sliderX, setSliderX] = useState(0)
	const slider = useRef(null)

	useEffect(() => {
		let sortBy = { field: 'Date', type: 'desc' }
		GetData('Projects', null, sortBy)
		setTopThree(data.slice(0, 3))
		const handleScroll = () => {
			setSliderX(
				Math.round(
					slider.current.scrollLeft / slider.current.firstChild.offsetWidth
				)
			)
		}
		slider.current.addEventListener('scroll', handleScroll)
		return () => {
			if (slider.current) {
				slider.current.removeEventListener('scroll', handleScroll)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const showCard = (card) => {
		const position = card * slider.current.firstChild.offsetWidth
		console.log(position)
		slider.current.scrollLeft = position
	}

	return (
		<div className={styles.RecentWork}>
			<div
				className={styles.Cards}
				ref={slider}
			>
				{topThree.map((project) => (
					<Link
						key={project.id}
						href={`/Projects/${project.id}`}
					>
						<div className={styles.Card}>
							<div className={styles.Visuals}>
								<div className={styles.MockUp}>
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
								</div>
							</div>
							<div className={styles.project}>
								<a
									className={styles.Project}
									href={project?.URL}
									target='_blank'
								>
									<h3>{project?.Project}</h3>
								</a>
								<div className={styles.Technology}>
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
								<p>{project?.Description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
			<nav>
				<button
					aria-controls='most recent project'
					aria-selected={sliderX === 0}
					onClick={() => showCard(0)}
				></button>
				<button
					aria-controls='second most recent project'
					aria-selected={sliderX === 1}
					onClick={() => showCard(1)}
				></button>
				<button
					aria-controls='third most recent project'
					aria-selected={sliderX === 2}
					onClick={() => showCard(2)}
				></button>
			</nav>
		</div>
	)
}
