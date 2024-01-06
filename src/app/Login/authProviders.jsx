import Icon from '../Icons/icon'

export default function authProviders() {
	return (
		<div className='flex items-center justify-center gap-10'>
			<div className='provider'>
				<Icon icon='google' size='large' />
				<label htmlFor='google'>Google</label>
			</div>
			<div className='provider'>
				<Icon icon='windows' size='large' />
				<label htmlFor='windows'>Windows</label>
			</div>
			<div className='provider'>
				<Icon icon='apple' size='large' />
				<label htmlFor='apple'>Apple</label>
			</div>
		</div>
	)
}
