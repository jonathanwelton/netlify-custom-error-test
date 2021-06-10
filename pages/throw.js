const Throw = () => <div>The error page</div>;

export const getServerSideProps = async() => {
  throw new Error('a new error')
}
export default Throw;