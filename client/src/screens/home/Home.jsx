import {useState} from "react"
import {useNavigate} from "react-router-dom"
import UserModal from "../../components/userModal/UserModal"
import {loginUser, registerUser} from "../../services/users"
import "./home.css"

export default function Home(props) {
  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleSignup, setToggleSignup] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [is_admin, setIs_Admin] = useState(false)
  const [is_customer, setIs_Customer] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
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

  const handleLogin = async (e) => {
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
    <div className="homeButtonContainer">
      <button className="homeButton" onClick={() => setToggleSignup((prevToggle) => !prevToggle)}>
        Sign Up
      </button>

      <br />

      <button className="homeButton" onClick={() => setToggleLogin((prevToggle) => !prevToggle)}>
        Login
      </button>

      <UserModal
        setEmail={setEmail}
        setIs_Admin={setIs_Admin}
        setIs_Customer={setIs_Customer}
        handleSignUp={handleSignUp}
        toggleSignup={toggleSignup}
        setToggleSignup={setToggleSignup}
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        setCurrentUser={props.setCurrentUser}
        handleLogin={handleLogin}
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}
      />
    </div>
  )
}
