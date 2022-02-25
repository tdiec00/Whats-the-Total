import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {registerUser} from "../../services/users"

export default function SignUp(props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [is_admin, setIs_Admin] = useState(false)
  const [is_customer, setIs_Customer] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      email,
      password,
      is_admin,
      is_customer,
    }
    const resp = await registerUser(newUser)
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
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        placeholder="email"
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
      <input type="checkbox" value={is_admin} onChange={() => setIs_Admin((is_admin) => !is_admin)} />
      <label>Will you be an employee?</label>
      <br />
      <input type="checkbox" value={is_customer} onChange={() => setIs_Customer((is_customer) => !is_customer)} />
      <label>Will you be a customer?</label>
      <br />
      <button>Create new Login</button>
    </form>
  )
}
