import {deleteProduct} from "../../services/products"

export default function DeleteButton(props) {
  const handleSubmit = async () => {
    await deleteProduct(props.product_id)
    window.location.reload(false)
  }

  return <button onClick={() => handleSubmit()}>Delete</button>
}
