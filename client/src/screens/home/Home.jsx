import {Link} from "react-router-dom"
import CategoryNavContainer from "../../components/catgeoryNavContainer/CategoryNavContainer"
export default function Home() {
  return (
    <div>
      <Link to="/signup">
        <h1>SignUp</h1>
      </Link>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
      <CategoryNavContainer />
    </div>
  )
}
