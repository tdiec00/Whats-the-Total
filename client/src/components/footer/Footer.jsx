import {useNavigate} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import AddProductButton from "../addProductButton/AddProductButton"
import BurgerMenu from "../burgerMenu/BurgerMenu"
import "./footer.css"

export default function Footer(props) {
  //eslint-disable-next-line

  const navigate = useNavigate()
  const path = window.location.pathname

  const loginNav = () => {
    if (path === "/") {
      alert("Please Click the Login button in the middle.")
    } else {
      navigate("/")
    }
  }

  const handleNavigate = () => {
    navigate("/shopping-cart")
  }

  return (
    <>
      {props.currentUser ? (
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
              <div className="footer-count-container">
                <p>{props.count}</p>
              </div>
              {/* <NavTotal /> */}
            </button>
          </div>
          <div>
            <div className="emoji-container">
              <BurgerMenu toggleClass={props.toggleClass} handleToggle={props.handleToggle} />
              <button className="cart-emoji" onClick={props.handleToggle}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer">
          <div className="nav-text">
            <button className="footer-text-button" onClick={() => loginNav()}>
              Login
            </button>
          </div>

          <div className="cart-emoji-container">
            <button className="cart-emoji" onClick={handleNavigate}>
              <FaShoppingCart />
              <div className="footer-count-container">
                <p>{props.count}</p>
              </div>
            </button>
          </div>
          <div>
            <div className="emoji-container">
              <BurgerMenu toggleClass={props.toggleClass} handleToggle={props.handleToggle} />
              <button className="cart-emoji" onClick={props.handleToggle}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
