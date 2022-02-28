import "./login.css"

export default function Login(props) {
  return (
    <div className="login-container">
      <form onSubmit={(e) => props.handleLogin(e)}>
        <h4>Please Login to Shop with us.</h4>
        <input
          type="text"
          value={props.username}
          onChange={(e) => {
            props.setUsername(e.target.value)
          }}
          placeholder="username"
        />
        <br />
        <input
          type="password"
          value={props.password}
          onChange={(e) => {
            props.setPassword(e.target.value.toString())
          }}
          placeholder="password must be 6 digits long"
        />
        <br />
        <button onSubmit={() => props.setToggleLogin((prevToggle) => !prevToggle)}>Submit</button>
      </form>
    </div>
  )
}
