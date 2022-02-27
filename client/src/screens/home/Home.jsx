import {Link} from "react-router-dom"
import "./home.css"

export default function Home() {
  return (
    <div className="homeButtonContainer">
      <Link to="/signup">
        <button className="homeButton">Sign Up</button>
      </Link>
      <br />
      <Link to="/login">
        <button className="homeButton">Login</button>
      </Link>
    </div>
  )
}
