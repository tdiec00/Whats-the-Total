import React from "react"

export default function ProductTotal(props) {
  let count = props.products?.filter((product) => product.id === props.list_id).length
  let total = count * props.price
  return <h4>${total.toFixed(2)}</h4>
}
