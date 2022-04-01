import {checkoutCart} from "../../services/users"
import {HiShoppingCart} from "react-icons/hi"

export default function CheckoutButton() {
  const id = localStorage.getItem("id")
  const handleSubmit = async () => {
    await checkoutCart(id)
    window.location.reload(false)
  }

  return <button onClick={() => handleSubmit()}>Check Out{<HiShoppingCart />}</button>
}
