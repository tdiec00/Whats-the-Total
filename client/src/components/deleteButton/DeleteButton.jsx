import {deleteProduct} from "../../services/products"
import {useNavigate} from "react-router-dom"

export default function DeleteButton(props) {
  let navigate = useNavigate()

  const handleSubmit = async () => {
    let id = localStorage.getItem("id")
    if (id === null) {
      navigate("/")
    }
    await deleteProduct(props.product_id)
    window.location.reload(false)
  }

  return <button onClick={() => handleSubmit()}>Delete</button>
}
