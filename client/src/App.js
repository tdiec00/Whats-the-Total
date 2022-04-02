import {Routes, Route, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./screens/home/Home"
import Products from "./screens/products/Products"
import {verifyUser} from "./services/users"
import {getUserProducts} from "./services/users"
import ProductsContainer from "./components/productsContainer/ProductsContainer"
import Cart from "./screens/cart/Cart"
import EditProductModal from "./components/editProductModal/EditProductModal"
import ProductModal from "./components/productModal/ProductModal"
import {FillingBottle} from "react-cssfx-loading"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(false)
  }, [])

  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])
  console.log(currentUser)

  const logOut = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("id")
    setCurrentUser(null)
    navigate("/")
    window.location.reload(false)
  }
  const getProducts = async () => {
    const products = await getUserProducts(currentUser.id)
    setCount(products.length)
  }

  if (currentUser) {
    getProducts()
  }

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle)
  }
  let toggleClass = toggle ? "ease-in" : "ease-out"

  return (
    <>
      {loading === false ? (
        <div className="main-body" onClick={() => (toggle === true ? setToggle(false) : null)}>
          <Navbar logOut={logOut} currentUser={currentUser} />
          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home setCurrentUser={setCurrentUser} />} />
              <Route path="/products" element={<Products />} />
              <Route path="/shopping-cart" element={<Cart setCount={setCount} />} />
              <Route path="/products/:category" element={<ProductsContainer />} />
              <Route path="/products/edit/:id" element={<EditProductModal />} />
              <Route path="/products/add" element={<ProductModal />} />
            </Routes>
          </div>
          <Footer logOut={logOut} currentUser={currentUser} count={count} toggleClass={toggleClass} handleToggle={handleToggle} />
        </div>
      ) : (
        <div className="loading">
          <h1>Page is loading...</h1>
          <FillingBottle className="logo" />
        </div>
      )}
    </>
  )
}

export default App
