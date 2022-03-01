import {checkoutCart} from "../../services/users"

export default function CheckoutButton() {
  const handleSubmit = async () => {
    const id = localStorage.getItem("id")
    await checkoutCart(id)
    window.location.reload(false)
  }

  return <button onClick={() => handleSubmit()}>Check Out</button>
}
