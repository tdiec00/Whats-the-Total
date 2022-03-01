import {Link} from "react-router-dom"
import "./burgerMenu.css"

export default function BurgerMenu(props) {
  return (
    <div className={`burger-menu ${props.toggleClass}`}>
      <div className="burger-text-container">
        <Link to="/products/fruits" onClick={props.handleToggle}>
          Fruits
        </Link>

        <Link to="/products/vegetables" onClick={props.handleToggle}>
          Vegetables
        </Link>

        <Link to="/products/frozen" onClick={props.handleToggle}>
          Frozen Foods
        </Link>

        <Link to="/products/drinks" onClick={props.handleToggle}>
          Drinks
        </Link>

        <Link to="/products/dairy" onClick={props.handleToggle}>
          Dairy
        </Link>

        <Link to="/products/meats" onClick={props.handleToggle}>
          Meats
        </Link>
      </div>
    </div>
  )
}
