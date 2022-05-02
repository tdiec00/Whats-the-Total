import React from "react"

export default function ProductTotal(props) {
  //display the total of a specific product including the quantity of each product
  //example 5 apples * $1.00 = $5.00
  let count = props.products?.filter((product) => product.id === props.list_id).length
  let total = count * props.price
  return <h4>${total.toFixed(2)}</h4>
}
