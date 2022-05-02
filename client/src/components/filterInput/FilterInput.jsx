import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {getAllProducts} from "../../services/products"
import {HiOutlineSearch} from "react-icons/hi"
import "./filterInput.css"

export default function FilterInput(props) {
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()

  //this is the search component that allows the user to search for any product
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
    <div className="input-container">
      <form className="filter-input" onSubmit={(e) => search(e)}>
        <input placeholder="Search for Products" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        <button>
          <HiOutlineSearch />
        </button>
      </form>
    </div>
  )
}
