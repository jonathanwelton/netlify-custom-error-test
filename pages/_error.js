import Rollbar from 'rollbar'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

	const rollbar = new Rollbar({
		accessToken: `${process.env.ROLLBAR_SERVER_TOKEN}`,
		captureUncaught: true,
		captureUnhandledRejections: true,
		environment: process.env.NODE_ENV,
	})

  rollbar.error(`Error ${statusCode}: ` + err, req)

  return { statusCode }
}

export default Error