import states from "../../utilities/saleTax.json"

export default function ShoppingTotal(props) {
  let total = 0
  let stateTax = localStorage.getItem("state")

  props.products.forEach((product) => {
    total += product.price
  })
  let rate = Object.entries(states.states).filter((state) => {
    return state[0] === stateTax
  })
  let taxRate = rate[0][1]?.rate
  let tax = Number((total.toFixed(2) * taxRate).toFixed(2))
  let finalTotal = total + tax

  return (
    <div className="total-container">
      <p className="subtotal-container">Subtotal: ${total.toFixed(2)}</p>
      <p className="total-text-container">Tax: ${tax.toFixed(2)}</p>
      <p>Your Total: ${finalTotal.toFixed(2)}</p>
    </div>
  )
}
