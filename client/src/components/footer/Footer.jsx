import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import BurgerMenu from "../burgerMenu/BurgerMenu"
import "./footer.css"

export default function Footer() {
  //eslint-disable-next-line
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle)
  }

  const handleNavigate = () => {
    navigate("/shopping-cart")
  }

  return (
    <div className="footer">
      <button className="cart-emoji" onClick={handleNavigate}>
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
