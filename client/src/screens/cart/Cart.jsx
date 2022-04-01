import ShoppingCartContainer from "../../components/shoppingCartContainer/ShoppingCartContainer"

export default function Cart(props) {
  return (
    <div>
      <ShoppingCartContainer setCount={props.setCount} />
    </div>
  )
}
