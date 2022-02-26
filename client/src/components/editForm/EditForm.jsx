import {useState, useEffect} from "react"
import {updateProduct} from "../../services/products"
import {useParams, useNavigate} from "react-router-dom"
import {getOneProduct} from "../../services/products"

export default function EditForm() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getOneProduct(id)
      setName(product.name)
      setPrice(product.price)
    }
    fetchProduct()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProduct = {
      name,
      price,
      category,
    }
    await updateProduct(id, newProduct)
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
      />
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value)
        }}
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
      <button>Update Product</button>
    </form>
  )
}
