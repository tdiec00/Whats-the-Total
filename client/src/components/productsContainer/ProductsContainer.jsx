import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getAllProducts} from "../../services/products"
import {addToCart} from "../../services/users"
import EditButton from "../editButton/EditButton"
import DeleteButton from "../deleteButton/DeleteButton"
import vegetables from "../../images/vegetables.jpeg"
import "./productsContainer.css"

export default function ProductsContainer() {
  const [products, setProducts] = useState([])
  const {category} = useParams()

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
    alert("Product Added")
  }

  return (
    <div className="products-content-container">
      {products.map((product, index) =>
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
  )
}
