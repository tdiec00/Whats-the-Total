import {useNavigate} from "react-router-dom"

export default function EditButton(props) {
  const navigate = useNavigate()

  //button for admins to edit specific product details
  return (
    <button
      onClick={() => {
        let id = localStorage.getItem("id")
        if (id === null) {
          navigate("/")
        } else {
          navigate(`/products/edit/${props.product_id}`)
        }
      }}
    >
      {" "}
      Edit
    </button>
  )
}
