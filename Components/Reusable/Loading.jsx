import styles from '../../styles/Loaders.module.scss'
function Loading() {
	return (
		<div className={styles.loaderBlock}>
			<span className={styles.loader}></span>
		</div>
	)
}

export default Loading
