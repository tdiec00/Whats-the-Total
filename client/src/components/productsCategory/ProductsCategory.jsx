import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getAllProducts} from "../../services/products"

export default function ProductsCategory() {
  const [products, setProducts] = useState([])
  const {category} = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts()
      setProducts(res)
    }
    fetchProducts()
  }, [])
  console.log(products)

  return (
    <div>
      {products.map((product) =>
        product.category == category ? (
          <>
            <h1>{product.name}</h1>
            <h3>${product.price.toFixed(2)}</h3>
          </>
        ) : null
      )}
    </div>
  )
}
