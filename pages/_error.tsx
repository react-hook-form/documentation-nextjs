// TODO: Error Page
const Error = () => <p>Something Went Wrong!</p>

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }
  return {
    namespacesRequired: ["common"],
    statusCode,
  }
}

export default Error
