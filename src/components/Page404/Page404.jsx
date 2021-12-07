import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="page-404">
      <h1>Oops! 404</h1>
      <h1>page not found!</h1>
      <Link className="link" to="/">
        Back to home page
      </Link>
    </div>
  )
}

export default Page404
