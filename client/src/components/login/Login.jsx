import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {loginUser} from "../../services/users"

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      password,
    }
    const resp = await loginUser(newUser)
    props.setCurrentUser(resp)
    navigate("/products")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        placeholder="username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value.toString())
        }}
        placeholder="password must be 6 digits long"
      />
      <br />
      <button>Login</button>
    </form>
  )
}
