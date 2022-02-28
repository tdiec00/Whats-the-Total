import Login from "../../screens/login/Login"
import "./modal.css"

export default function Modal(props) {
  if (!props.toggle) {
    return null
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-body">
            <Login
              setToggle={props.setToggle}
              setCurrentUser={props.setCurrentUser}
              handleSubmit={props.handleSubmit}
              setUsername={props.setUsername}
              setPassword={props.setPassword}
              username={props.username}
              password={props.password}
            />
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
