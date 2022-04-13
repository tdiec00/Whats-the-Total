import {Link} from "react-router-dom"
import ProductCard from "../../components/productCard/ProductCard"

export default function SearchResult(props) {
  return (
    <div className="products-content-container">
      {!props.searchResults || props.searchResults.length < 1 ? (
        <div>
          <h1>No products found. Please search again.</h1>
          <Link to="/products">Return to product categories</Link>
        </div>
      ) : (
        props.searchResults.map((product, index) => {
          return (
            <div key={index} className="product-card">
              <ProductCard product={product} />
            </div>
          )
        })
      )}
    </div>
  )
}
