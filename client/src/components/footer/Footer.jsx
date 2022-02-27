import {useState} from "react"
import {FaShoppingCart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import BurgerMenu from "../burgerMenu/BurgerMenu"
import "./footer.css"

export default function Footer() {
  //eslint-disable-next-line
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <div className="footer">
      <button className="cart-emoji">
        <FaShoppingCart />
      </button>
      <BurgerMenu />
      <div className="emoji-container">
        <button className="cart-emoji" onClick={handleToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  )
}
