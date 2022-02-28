import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import AddProductButton from "../addProductButton/AddProductButton"
import BurgerMenu from "../burgerMenu/BurgerMenu"
import "./footer.css"

export default function Footer(props) {
  //eslint-disable-next-line
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle)
  }

  const toggleClass = toggle ? "ease-in" : "ease-out"
  const handleNavigate = () => {
    navigate("/shopping-cart")
  }

  return (
    <div className="footer">
      <div className="nav-text">
        <AddProductButton />
        <button className="footer-text-button" onClick={props.logOut}>
          Logout
        </button>
      </div>

      <div className="cart-emoji-container">
        <button className="cart-emoji" onClick={handleNavigate}>
          <FaShoppingCart />
        </button>
      </div>
      <div>
        <div className="emoji-container">
          <BurgerMenu toggleClass={toggleClass} />
          <button className="cart-emoji" onClick={handleToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  )
}
