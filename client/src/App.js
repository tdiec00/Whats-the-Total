import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./screens/home/Home"
import Login from "./screens/login/Login"
import SignUp from "./screens/signup/SignUp"
import Products from "./screens/products/Products"
import {verifyUser} from "./services/users"
import ProductsCategory from "./components/productsCategory/ProductsCategory"
import Cart from "./screens/cart/Cart"

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
        <Route path="/products" element={<Products />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductsCategory />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
