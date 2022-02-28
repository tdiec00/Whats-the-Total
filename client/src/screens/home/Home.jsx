import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Modal from "../../components/modal/Modal"
import {loginUser} from "../../services/users"
import "./home.css"

export default function Home(props) {
  const [toggle, setToggle] = useState(false)
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
    <div className="homeButtonContainer">
      <Link to="/signup">
        <button className="homeButton">Sign Up</button>
      </Link>
      <br />

      <button className="homeButton" onClick={() => setToggle((prevToggle) => !prevToggle)}>
        Login
      </button>

      <Modal
        toggle={toggle}
        setToggle={setToggle}
        setCurrentUser={props.setCurrentUser}
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}
      />
    </div>
  )
}
