import {Routes, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./screens/home/Home"
import Login from "./screens/login/Login"
import SignUp from "./screens/signup/SignUp"
import Products from "./screens/products/Products"
import {verifyUser} from "./services/users"
import ProductsContainer from "./components/productsContainer/ProductsContainer"
import Cart from "./screens/cart/Cart"
import EditForm from "./components/editForm/EditForm"
import AddProduct from "./components/addProduct/AddProduct"
import "./App.css"

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
    localStorage.removeItem("id")
    setCurrentUser(null)
  }

  return (
    <div>
      <Navbar logOut={logOut} currentUser={currentUser} />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home setCurrentUser={setCurrentUser} />} />
          {/* <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} /> */}
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductsContainer />} />
          <Route path="/products/edit/:id" element={<EditForm />} />
          <Route path="/products/add" element={<AddProduct />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
