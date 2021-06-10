function Error(status) {
	return (
			<div>
				<h1>Oops, something went wrong</h1>
				<p>You have a {status.statusCode} error!</p>
			</div>
	)
}

Error.getInitialProps = ({ req, res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 520

	return { statusCode }
}

export default Error