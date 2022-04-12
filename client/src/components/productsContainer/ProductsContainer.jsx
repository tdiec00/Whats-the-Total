import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {getAllProducts} from "../../services/products"
import {addToCart} from "../../services/users"
import EditButton from "../editButton/EditButton"
import DeleteButton from "../deleteButton/DeleteButton"
import vegetables from "../../images/vegetables.jpeg"
import "./productsContainer.css"

export default function ProductsContainer() {
  const [productsArray, setProductsArray] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const {category} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts()
      setProductsArray(res)
      setFilteredResults(res)
    }
    fetchProducts()
  }, [])

  const searchProducts = (searchValue) => {
    const filteredProducts = productsArray?.filter((product) => {
      return Object.values(product.name).join("").toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredResults(filteredProducts)
  }

  const handleSubmit = async (product_id) => {
    const id = localStorage.getItem("id")
    if (id === null) {
      navigate("/")
    } else {
      await addToCart(id, product_id)
      window.location.reload(false)
    }
  }

  return (
    <div>
      <div className="search-input">
        <input placeholder="Search for Products" onChange={(e) => searchProducts(e.target.value)} />
      </div>
      <div className="products-content-container">
        {filteredResults.map((product, index) =>
          product.category === category ? (
            <div key={index} className="product-card">
              <img src={vegetables} alt="vegetables"></img>
              <div className="product-text-container">
                <p>{product.name}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <div className="button-container">
                <button onClick={() => handleSubmit(product.id)}>Add to Cart</button>
                <EditButton product_id={product.id} />
                <DeleteButton product_id={product.id} />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}
