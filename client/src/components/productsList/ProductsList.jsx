import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {getAllProducts} from "../../services/products"
import ProductCard from "../productCard/ProductCard"
import "./productsList.css"

export default function ProductsList() {
  const [productsArray, setProductsArray] = useState([])
  // const [filteredResults, setFilteredResults] = useState([])
  const {category} = useParams()

  //this component renders the products on the shopping page
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts()
      setProductsArray(res)
      // setFilteredResults(res)
    }
    fetchProducts()
  }, [])

  // const searchProducts = (searchValue) => {
  //   const filteredProducts = productsArray?.filter((product) => {
  //     return Object.values(product.name).join("").toLowerCase().includes(searchValue.toLowerCase())
  //   })
  //   setFilteredResults(filteredProducts)
  // }

  return (
    <div>
      {/* <div className="search-input">
        <input placeholder="Search for Products" onChange={(e) => searchProducts(e.target.value)} />
      </div> */}
      <div className="products-content-container">
        {productsArray.map((product, index) =>
          product.category === category ? (
            <div key={index} className="product-card">
              <ProductCard product={product} />
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}
