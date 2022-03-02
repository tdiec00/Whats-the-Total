import {Routes, Route, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./screens/home/Home"
import Products from "./screens/products/Products"
import {verifyUser} from "./services/users"
import ProductsContainer from "./components/productsContainer/ProductsContainer"
import Cart from "./screens/cart/Cart"
import EditForm from "./components/editForm/EditForm"
import ProductModal from "./components/productModal/ProductModal"
import "./App.css"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

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
    navigate("/")
  }

  return (
    <div className="main-body">
      <Navbar logOut={logOut} currentUser={currentUser} />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home setCurrentUser={setCurrentUser} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductsContainer />} />
          <Route path="/products/edit/:id" element={<EditForm />} />
          <Route path="/products/add" element={<ProductModal />} />
        </Routes>
      </div>
      <Footer logOut={logOut} currentUser={currentUser} />
    </div>
  )
}

export default App
