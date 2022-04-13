import {useNavigate} from "react-router-dom"
import {addToCart} from "../../services/users"
import EditButton from "../editButton/EditButton"
import DeleteButton from "../deleteButton/DeleteButton"
import vegetables from "../../images/vegetables.jpeg"

export default function ProductCard({product}) {
  const navigate = useNavigate()

  const handleSubmit = async (product_id) => {
    const id = localStorage.getItem("id")
    if (id === null) {
      navigate("/")
    } else {
      await addToCart(id, product_id)
      window.location.reload(false)
    }
  }

  return (
    <>
      <img src={vegetables} alt="vegetables"></img>
      <div className="product-text-container">
        <p>{product.name}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <div className="button-container">
        <button onClick={() => handleSubmit(product.id)}>Add to Cart</button>
        <EditButton product_id={product.id} />
        <DeleteButton product_id={product.id} />
      </div>
    </>
  )
}
