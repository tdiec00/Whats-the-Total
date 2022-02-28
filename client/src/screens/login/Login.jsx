import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {loginUser} from "../../services/users"
import "./login.css"

export default function Login(props) {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const navigate = useNavigate()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const newUser = {
  //     username,
  //     password,
  //   }
  //   const resp = await loginUser(newUser)
  //   props.setCurrentUser(resp)
  //   navigate("/products")
  // }

  return (
    <div className="login-container">
      <form onSubmit={(e) => props.handleSubmit(e)}>
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
        <button onSubmit={() => props.setToggle((prevToggle) => !prevToggle)}>Submit</button>
      </form>
    </div>
  )
}
