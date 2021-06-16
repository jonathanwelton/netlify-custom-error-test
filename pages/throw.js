const Throw = ({ errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>No error was thrown</div>
}

export const getServerSideProps = async() => {
  try {
    throw new Error('a new error')
  } catch(e) {
    return {
      props: { errorCode: 500 }
    }
  }
}

export default Throw