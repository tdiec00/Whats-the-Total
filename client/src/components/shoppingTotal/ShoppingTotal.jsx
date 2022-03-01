export default function ShoppingTotal(props) {
  let total = 0
  props.products.forEach((product) => {
    total += product.price
  })
  return (
    <div className="total-container">
      <p>Your Total: ${total.toFixed(2)}</p>
    </div>
  )
}
