import Login from "../../screens/login/Login"
import SignUp from "../../screens/signup/SignUp"
import "./modal.css"

export default function Modal(props) {
  // if (!props.toggleLogin) {
  //   return null
  // }
  return (
    <div>
      {props.toggleLogin ? (
        <div className="modal" onClick={() => props.setToggleLogin((prevToggle) => !prevToggle)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-body">
                <Login
                  setToggleLogin={props.setToggleLogin}
                  setCurrentUser={props.setCurrentUser}
                  handleLogin={props.handleLogin}
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
      ) : null}
      {props.toggleSignup ? (
        <div className="modal" onClick={() => props.setToggleLogin((prevToggle) => !prevToggle)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-body">
                <SignUp
                  setToggleSignUp={props.setToggleLogin}
                  setCurrentUser={props.setCurrentUser}
                  handleLogin={props.handleLogin}
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
      ) : null}
    </div>
  )
}
