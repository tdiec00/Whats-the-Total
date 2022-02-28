import {useNavigate} from "react-router-dom"

export default function AddProductButton() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/products/add")
  }

  return (
    <button
      className="footer-text-button"
      onClick={() => {
        handleSubmit()
      }}
    >
      Add a Product
    </button>
  )
}
