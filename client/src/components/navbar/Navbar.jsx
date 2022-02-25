import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      {props.currentUser ? (
        <>
          <h3>Welcome, {props.currentUser.username}. Happy shopping!!</h3>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </div>
  )
}
