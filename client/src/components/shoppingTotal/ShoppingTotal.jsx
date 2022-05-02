import states from "../../utilities/saleTax.json"

export default function ShoppingTotal(props) {
  let total = 0
  let stateTax = localStorage.getItem("state")

  //add the the prices of the items to the total
  props.products.forEach((product) => {
    total += product.price
  })

  //access the state tax rates object to filter and find the tax rate for the customers state
  let rate = Object.entries(states.states).filter((state) => {
    return state[0] === stateTax
  })
  let taxRate = rate[0][1]?.rate

  //calculate the total cost of tax
  let taxTotal = Number((total.toFixed(2) * taxRate).toFixed(2))

  //the final total of the total including tax
  let finalTotal = total + taxTotal

  return (
    <div className="total-container">
      <p className="subtotal-container">Subtotal: ${total.toFixed(2)}</p>
      <p className="total-text-container">Tax: ${taxTotal.toFixed(2)}</p>
      <p>Your Total: ${finalTotal.toFixed(2)}</p>
    </div>
  )
}
