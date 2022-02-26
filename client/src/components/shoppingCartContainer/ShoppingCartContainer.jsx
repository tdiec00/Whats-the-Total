import {useState, useEffect} from "react"
import {getUserProducts} from "../../services/users"
import {deleteFromCart} from "../../services/users"

export default function ShoppingCartContainer() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const id = localStorage.getItem("id")
      const products = await getUserProducts(id)
      setProducts(products)
    }
    fetchProducts()
  }, [])

  const handleDelete = async (product_id) => {
    const id = localStorage.getItem("id")
    await deleteFromCart(id, product_id)
    window.location.reload(false)
  }

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.name}</h1>
            <h3>${product.price.toFixed(2)}</h3>
            <button onClick={() => handleDelete(product.id)}>Remove From Cart</button>
          </div>
        )
      })}
    </div>
  )
}
