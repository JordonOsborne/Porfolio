import Head from 'next/head'
import styles from '../../../styles/Project.module.scss'
import Header from '../../../Components/Header'
import Main from '../../../Components/Projects/Main'
import Details from '../../../Components/Projects/Details'
import Loading from '../../../Components/Reusable/Loading'
import ImageGallery from '../../../Components/Reusable/ImageGallery'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'
import AuthContext from '../../../Context/AuthContext'
import FirebaseAPI from '../../../Context/FirebaseAPI'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'

function Project() {
	const { user } = useContext(AuthContext)
	const { isLoading, GetProject, project } = useContext(FirebaseAPI)
	const router = useRouter()
	const { Id, Edit } = router.query
	const [imgModal, setImgModal] = useState()
	const [images, setImages] = useState([])
	const modal = useRef(null)

	useEffect(() => {
		if (router.isReady) {
			GetProject(Id)
		}
		if (!user.isAdmin && Edit) {
			router.push('/Denied')
			console.log('User is not Administrator')
		}
	}, [router.isReady, router.query, Edit])

	useEffect(() => {
		imgModal ? OpenImgModal() : modal.current?.close()
	}, [imgModal])

	const OpenImgModal = () => {
		modal.current?.showModal()
		document.documentElement.scrollTop = 0
		document.querySelector('body').style.overflow = 'hidden'
	}

	const CloseImgModal = () => {
		setImgModal(null)
		setImages([])
		document.querySelector('body').style.overflow = 'visible'
		modal.current.close()
	}

	return (
		<div id='Page'>
			<Head>
				<title>{`Porfolio | ${project?.Project}`}</title>
				<meta
					name='description'
					content={project?.Description}
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<ToastContainer />
			<Header />
			{isLoading || !project ? (
				<Loading />
			) : (
				<>
					{user && (
						<main id={styles.Project}>
							<Main
								project={project}
								edit={Edit}
								setImgModal={setImgModal}
								setImages={setImages}
							/>
							<dialog
								className={styles.ImgModal}
								ref={modal}
							>
								<AiOutlineClose
									onClick={() => CloseImgModal()}
									title='Close Image'
									className={styles.Close}
									fill='white'
								/>
								<h3>{imgModal?.Title}</h3>
								<div className={styles.ImgViewer}>
									<Image
										src={imgModal?.image}
										alt={imgModal?.Title}
										width='1100'
										height='619'
									/>
								</div>
								<ImageGallery
									Images={images}
									setImgModal={setImgModal}
									imgModal={imgModal}
								/>
							</dialog>
							<Details
								Slug={Id}
								setImgModal={setImgModal}
								setImages={setImages}
							/>
						</main>
					)}
				</>
			)}
		</div>
	)
}

export default Project
