import "./navbar.css"
import FilterInput from "../filterInput/FilterInput"
export default function Navbar(props) {
  return (
    <div className="nav">
      {props.currentUser ? (
        <>
          <h4>Welcome, {props.currentUser.username}. Happy shopping!!</h4>
          <FilterInput setSearchResults={props.setSearchResults} />
        </>
      ) : (
        <>
          <h4>Login to Shop with us</h4>
          <FilterInput setSearchResults={props.setSearchResults} />
        </>
      )}
    </div>
  )
}
