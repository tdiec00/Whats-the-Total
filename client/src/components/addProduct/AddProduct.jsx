import {useState} from "react"
import {createProduct} from "../../services/products"
import {useNavigate} from "react-router-dom"

export default function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProduct = {
      name,
      price,
      category,
    }
    await createProduct(newProduct)
    navigate("/products")
  }

  const handleChange = (e) => {
    const selectedCategory = e.target.value
    setCategory(selectedCategory)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        placeholder="name"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
        placeholder="price"
      />
      <select
        defaultValue=""
        onChange={(e) => {
          handleChange(e)
        }}
      >
        <option value="" disabled>
          Choose a category
        </option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="frozen">Frozen Foods</option>
        <option value="drinks">Drinks</option>
        <option value="meats">Meats</option>
        <option value="dairy">Dairy</option>
      </select>
      <button>Add Product</button>
    </form>
  )
}
