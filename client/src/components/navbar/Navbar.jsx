import "./navbar.css"

export default function Navbar(props) {
  return (
    <div className="nav">
      {props.currentUser ? (
        <>
          <h4>Welcome, {props.currentUser.username}. Happy shopping!!</h4>
        </>
      ) : (
        <h4>Login to Shop with us</h4>
      )}
    </div>
  )
}
