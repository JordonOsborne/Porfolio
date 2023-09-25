import styles from '../../styles/Project.module.scss'
import Image from 'next/image'

export default function ImageGallery({ Images, setImgModal, imgModal }) {
	return (
		<div className={styles.ImgGallery}>
			{Images.map((item) => {
				return (
					<div
						key={item.index}
						aria-selected={item?.image === imgModal?.image}
					>
						<Image
							src={item.image}
							title={item?.Title}
							alt={item?.Title}
							width='178'
							height='100'
							onClick={() => setImgModal(item)}
						/>
					</div>
				)
			})}
		</div>
	)
}
