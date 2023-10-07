import styles from '../styles/Contact.module.scss'

export default function InteractiveForms() {
	return (
		<div className={styles.InteractiveForms}>
			<div>
				<h3>Need a quick quote?</h3>
				<p>
					Don't want to waste time filling out a contact form to get a two
					minute quote? Give this interactive questionaire a try, and receive a
					free instant quote.
				</p>
				<button>Get Quote</button>
			</div>
			<div>
				<h3>Recruiters / Potential Employers</h3>
				<p>
					Are you a recruiter or potential employer looking to hire me for a
					SharePoint Developer or Power Platform Developer role? Use this form
					to see if I have the skills you desire.
				</p>
				<button>Skill Comparison</button>
			</div>
			<div>
				<h3>Review my Work</h3>
				<p>
					Are you fan of my work? Please take the time to rate my projects and
					leave feedback. Or take a second and see what other people say about
					my work.
				</p>
				<button>Review Projects</button>
			</div>
		</div>
	)
}
