import {checkoutCart} from "../../services/users"

export default function CheckoutButton() {
  const id = localStorage.getItem("id")
  const handleSubmit = async () => {
    await checkoutCart(id)
    window.location.reload(false)
  }

  return <button onClick={() => handleSubmit()}>Check Out</button>
}
