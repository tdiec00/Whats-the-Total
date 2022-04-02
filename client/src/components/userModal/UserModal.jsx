import Login from "../../screens/login/Login"
import SignUp from "../../screens/signup/SignUp"
import "./userModal.css"

export default function UserModal(props) {
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
      ) : props.toggleSignup ? (
        <div className="modal" onClick={() => props.setToggleSignup((prevToggle) => !prevToggle)}>
          <div className="modal-content modal-content-signup" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header modal-header-signup">
              <div className="modal-body">
                <SignUp
                  setToggleSignup={props.setToggleSignup}
                  setCurrentUser={props.setCurrentUser}
                  handleSignUp={props.handleSignUp}
                  setUsername={props.setUsername}
                  setPassword={props.setPassword}
                  setEmail={props.setEmail}
                  setIs_Customer={props.setIs_Customer}
                  setIs_Admin={props.setIs_Admin}
                  username={props.username}
                  password={props.password}
                  email={props.email}
                  setState={props.setState}
                  is_customer={props.is_customer}
                  is_admin={props.is_admin}
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
