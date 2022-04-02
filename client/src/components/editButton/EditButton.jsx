import {useNavigate} from "react-router-dom"

export default function EditButton(props) {
  const navigate = useNavigate()

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
