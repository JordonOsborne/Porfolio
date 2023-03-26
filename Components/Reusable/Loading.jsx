import styles from '../../styles/Loaders.module.scss'
function Loading({ size }) {
	return (
		<div className={styles.loaderBlock}>
			<span
				className={styles.loader}
				data-size={size}
			></span>
		</div>
	)
}

export default Loading
