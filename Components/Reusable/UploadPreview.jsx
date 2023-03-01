function UploadPreview({ Source, Label, Multiple }) {
	const Images = () => {
		return Source.map((url, index) => (
			<img
				key={index}
				src={url}
				alt={`Image ${index}`}
				title={url
					.replace(
						'https://firebasestorage.googleapis.com/v0/b/josborne-dev.appspot.com/o',
						''
					)
					.replace(/%2F/g, '/')}
			/>
		))
	}
	console.log(Multiple)
	return Multiple ? (
		Images()
	) : (
		<img
			src={Source}
			alt={Label}
			title={Label}
		/>
	)
}

export default UploadPreview
