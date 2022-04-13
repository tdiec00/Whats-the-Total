import "./navbar.css"
import FilterInput from "../filterInput/FilterInput"
export default function Navbar(props) {
  return (
    <div className="nav">
      {props.currentUser ? (
        <>
          <h4>Welcome, {props.currentUser.username}.</h4>
          <FilterInput setSearchResults={props.setSearchResults} />
        </>
      ) : (
        <>
          <h4>Please Login to shop</h4>
          <FilterInput setSearchResults={props.setSearchResults} />
        </>
      )}
    </div>
  )
}
