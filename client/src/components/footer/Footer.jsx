import {AiOutlineShoppingCart} from "react-icons/ai"
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <button className="cart-emoji">
        <AiOutlineShoppingCart />
      </button>
    </div>
  )
}
