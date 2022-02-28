import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getAllProducts} from "../../services/products"
import {addToCart} from "../../services/users"
import {useNavigate} from "react-router-dom"
import EditButton from "../editButton/EditButton"
import DeleteButton from "../deleteButton/DeleteButton"
import "./productsContainer.css"

export default function ProductsContainer() {
  const [products, setProducts] = useState([])
  const {category} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts()
      setProducts(res)
    }
    fetchProducts()
  }, [])

  const handleSubmit = async (product_id) => {
    const id = localStorage.getItem("id")
    await addToCart(id, product_id)
    navigate("/shopping-cart")
  }

  return (
    <div className="products-content-container">
      {products.map((product, index) =>
        product.category == category ? (
          <div key={index} className="product-card">
            <h1>{product.name}</h1>
            <h3>${product.price.toFixed(2)}</h3>
            <button onClick={() => handleSubmit(product.id)}>Add to Cart</button>
            <EditButton product_id={product.id} />
            <DeleteButton product_id={product.id} />
          </div>
        ) : null
      )}
    </div>
  )
}
