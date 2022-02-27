import {Link} from "react-router-dom"
import "./categoryNavConatiner.css"

export default function CategoryNavContainer() {
  return (
    <div className="categoryNav">
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
  )
}
