import {Link} from "react-router-dom"
import AddProductButton from "../addProductButton/AddProductButton"

import "./navbar.css"

export default function Navbar(props) {
  return (
    <div className="nav">
      {props.currentUser ? (
        <>
          <h4>Welcome, {props.currentUser.username}. Happy shopping!!</h4>
          <div>
            <button onClick={props.logOut}>Logout</button>
            <AddProductButton />
          </div>
        </>
      ) : // <>
      //   <Link to="/">Home</Link>
      //   <Link to="/login">Login</Link>
      //   <Link to="/signup">Signup</Link>
      // </>
      null}
    </div>
  )
}
