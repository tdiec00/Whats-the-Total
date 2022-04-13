import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {getAllProducts} from "../../services/products"

export default function FilterInput(props) {
  const [searchValue, setSearchValue] = useState("")

  const navigate = useNavigate()

  // useEffect(() => {
  //   const result = localStorage.getItem("search result")

  //   setSearchValue(result)

  //   const fetchProducts = async () => {
  //     console.log(searchValue)
  //     const res = await getAllProducts()
  //     const searchProducts = res.filter((product) => {
  //       return Object.values(product.name).join("").toLowerCase().includes(searchValue.toLowerCase())
  //     })
  //     props.setSearchResults(searchProducts)
  //   }
  //   fetchProducts()
  // }, [])

  const search = async (e) => {
    e.preventDefault()
    localStorage.removeItem("search result")
    localStorage.setItem("search result", searchValue)
    const res = await getAllProducts()
    const searchProducts = res.filter((product) => {
      return Object.values(product.name).join("").toLowerCase().includes(searchValue.toLowerCase())
    })
    props.setSearchResults(searchProducts)

    navigate("/products/search")
  }

  return (
    <form onSubmit={(e) => search(e)}>
      <input placeholder="Search for Products" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
      <button>Submit</button>
    </form>
  )
}
