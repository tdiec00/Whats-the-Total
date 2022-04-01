import React from "react"

export default function NavTotal(props) {
  let total = 0
  props.products.forEach((product) => {
    total += product.price
  })
  return (
    <div className="total-container">
      <p>${total.toFixed(2)}</p>
    </div>
  )
}
