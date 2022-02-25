import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./screens/home/Home"
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import ProductContainer from "./components/productContainer/ProductContainer"
import ShoppingCartContainer from "./components/shoppingCartContainer/ShoppingCartContainer"
import {verifyUser} from "./services/users"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logOut = () => {
    localStorage.removeItem("authToken")
    setCurrentUser(null)
  }

  return (
    <div>
      <Navbar logOut={logOut} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
        <Route path="/products/*" element={<ProductContainer />} />
        <Route path="/shopping-cart" element={<ShoppingCartContainer />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
