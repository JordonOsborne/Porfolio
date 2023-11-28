import CMD_Environmental from './EMN-CMD-Environmental'
import TNO_Quality_Assurance from './EMN-TNO-Quality-Assurance'
import CMD_Capital_Expense_Projects from './EMN-Capital-Expense'

export default function Details({ Slug, setImgModal, setImages }) {
	switch (Slug) {
		case 'EMN-CMD-Environmental':
			return (
				<CMD_Environmental
					setImgModal={setImgModal}
					setImages={setImages}
				/>
			)
		case 'EMN-Capital-&-Expense-Project-Tracker':
			return (
				<CMD_Capital_Expense_Projects
					setImgModal={setImgModal}
					setImages={setImages}
				/>
			)
		case 'EMN-TNO-Quality-Assurance':
			return <TNO_Quality_Assurance />
		default:
			return
	}
}
