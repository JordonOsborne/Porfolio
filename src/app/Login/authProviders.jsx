import Icon from '../Icons/icon'

export default function authProviders() {
	return (
		<div className='flex items-center justify-center gap-6'>
			<div className='provider'>
				<Icon icon='google' />
				<label htmlFor='google'>Google</label>
			</div>
			<div className='provider'>
				<Icon icon='windows' />
				<label htmlFor='windows'>Windows</label>
			</div>
			<div className='provider'>
				<Icon icon='apple' />
				<label htmlFor='apple'>Apple</label>
			</div>
		</div>
	)
}
