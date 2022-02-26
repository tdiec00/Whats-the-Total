import {useNavigate} from "react-router-dom"

export default function ProductEdit() {
  const navigate = useNavigate()

  return <button onClick={navigate("/products/edit")}>ProductEdit</button>
}
