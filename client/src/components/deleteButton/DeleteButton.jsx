import {deleteProduct} from "../../services/products"
import {useNavigate} from "react-router-dom"

export default function DeleteButton(props) {
  let navigate = useNavigate()

  //button for admin to completely delete the product from the database
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
