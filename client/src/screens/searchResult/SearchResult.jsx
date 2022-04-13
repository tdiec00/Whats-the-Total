import ProductCard from "../../components/productCard/ProductCard"

export default function SearchResult(props) {
  console.log(props.searchResults)
  return (
    <div className="products-content-container">
      {props.searchResults &&
        props.searchResults.map((product, index) => {
          return (
            <div key={index} className="product-card">
              <ProductCard product={product} />
            </div>
          )
        })}
    </div>
  )
}
