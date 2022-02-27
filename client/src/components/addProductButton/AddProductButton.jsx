import {useNavigate} from "react-router-dom"

export default function AddProductButton() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/products/add")
  }

  return (
    <button
      onClick={() => {
        handleSubmit()
      }}
    >
      Add a New Product
    </button>
  )
}
