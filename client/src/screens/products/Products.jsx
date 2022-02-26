import {Link} from "react-router-dom"

export default function Products() {
  return (
    <div>
      <h1>Explore our various category of products</h1>
      <div>
        <div>
          <Link to="/products/fruits">Fruits</Link>
        </div>
        <div>
          <Link to="/products/vegetables">Vegetables</Link>
        </div>
        <div>
          <Link to="/products/frozen">Frozen Foods</Link>
        </div>
        <div>
          <Link to="/products/drinks">Drinks</Link>
        </div>
        <div>
          <Link to="/products/meats">Meats</Link>
        </div>
        <div>
          <Link to="/products/dairy">Dairy</Link>
        </div>
      </div>
    </div>
  )
}
