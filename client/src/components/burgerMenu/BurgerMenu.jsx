import {Link} from "react-router-dom"
import "./burgerMenu.css"

export default function BurgerMenu() {
  return (
    <div className="burger-menu">
      <div className="burger-text-container">
        <Link to="/products/fruits">Fruits</Link>

        <Link to="/products/vegetables">Vegetables</Link>

        <Link to="/products/frozen">Frozen Foods</Link>

        <Link to="/products/drinks">Drinks</Link>

        <Link to="/products/dairy">Dairy</Link>
      </div>
    </div>
  )
}