import {useState} from "react"
import {updateProduct} from "../../services/products"

export default function EditForm(props) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProduct = {
      name,
      price,
      category,
    }
    await updateProduct(props.product_id, newProduct)
    navigate("/products")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="name" />
      <input placeholder="price" />
      <select>
        <option value="fruits" selected>
          Fruits
        </option>
        <option value="vegetables">Vegetables</option>
        <option value="frozen">Frozen Foods</option>
        <option value="drinks">Drinks</option>
        <option value="meats">Meats</option>
        <option value="dairy">Dairy</option>
      </select>
    </form>
  )
}
