import {useNavigate} from "react-router-dom"

export default function ProductEdit(props) {
  const navigate = useNavigate()

  return <button onClick={() => navigate(`/products/edit/${props.product_id}`)}>ProductEdit</button>
}
