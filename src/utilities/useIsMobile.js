import { useState, useEffect } from 'react'
import tailwindConfig from '../../tailwind.config'

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		// ADD AND REMOVE EVENT LISTENER FOR WINDOW RESIZE
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

const useIsMobile = () => {
	const md = parseInt(tailwindConfig.theme.screens.md)
	const { width: windowWidth } = useWindowSize()
	const isMobile = !windowWidth || windowWidth < md
	return isMobile
}

export default useIsMobile
