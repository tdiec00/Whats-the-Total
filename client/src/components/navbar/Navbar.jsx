import {Link} from "react-router-dom"
import AddProductButton from "../addProductButton/AddProductButton"
export default function Navbar(props) {
  return (
    <div>
      {props.currentUser ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/shopping-cart">Shopping Cart</Link>
          <button onClick={props.logOut}>Logout</button>
          <AddProductButton />
          <h3>Welcome, {props.currentUser.username}. Happy shopping!!</h3>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </div>
  )
}
