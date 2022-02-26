export default function ShoppingTotal(props) {
  let total = 0
  props.products.forEach((product) => {
    total += product.price
  })
  return <div>Your Total: ${total.toFixed(2)}</div>
}
