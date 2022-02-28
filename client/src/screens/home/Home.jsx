import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Modal from "../../components/modal/Modal"
import {loginUser} from "../../services/users"
import "./home.css"

export default function Home(props) {
  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleSignUp, setToggleSignUp] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

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
      <Link to="/signup">
        <button className="homeButton">Sign Up</button>
      </Link>
      <br />

      <button className="homeButton" onClick={() => setToggleLogin((prevToggle) => !prevToggle)}>
        Login
      </button>

      <Modal
        toggleSignUp={toggleSignUp}
        setToggleSignUp={setToggleSignUp}
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
