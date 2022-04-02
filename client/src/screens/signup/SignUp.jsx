import StateDropdown from "../../components/stateDropdown/StateDropdown"
import "./signUp.css"

export default function SignUp(props) {
  return (
    <div className="signUp-container">
      <form onSubmit={(e) => props.handleSignUp(e)}>
        <h4>Create a new account.</h4>
        <input
          className="input-text-container"
          type="text"
          value={props.username}
          onChange={(e) => {
            props.setUsername(e.target.value)
          }}
          placeholder="username"
        />
        <br />
        <input
          className="input-text-container"
          type="email"
          value={props.email}
          onChange={(e) => {
            props.setEmail(e.target.value)
          }}
          placeholder="email"
        />
        <br />
        <input
          className="input-text-container"
          type="password"
          value={props.password}
          onChange={(e) => {
            props.setPassword(e.target.value.toString())
          }}
          placeholder="password must be 6 digits long"
        />
        <br />
        <StateDropdown setState={props.setState} />
        <br />
        <input className="input-boolean-container" type="checkbox" value={props.is_admin} onChange={() => props.setIs_Admin((is_admin) => !is_admin)} />
        <label>Will you be an employee?</label>
        <br />
        <input className="input-boolean-container" type="checkbox" value={props.is_customer} onChange={() => props.setIs_Customer((is_customer) => !is_customer)} />
        <label>Will you be a customer?</label>
        <br />
        <button className="create-button">Create new Login</button>
      </form>
    </div>
  )
}
