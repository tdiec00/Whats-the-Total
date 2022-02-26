import {useState, useEffect} from "react"
import {getUserProducts} from "../../services/users"

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

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.name}</h1>
            <h3>${product.price.toFixed(2)}</h3>
          </div>
        )
      })}
    </div>
  )
}
