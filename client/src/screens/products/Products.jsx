import {Link, useNavigate} from "react-router-dom"
import "./products.css"
import fruit from "../../images/fruit.jpeg"
import vegetables from "../../images/vegetables.jpeg"
import frozen from "../../images/frozen.jpeg"
import beverages from "../../images/beverages.jpeg"
import meats from "../../images/meats.jpeg"
import dairy from "../../images/dairy.jpeg"

export default function Products() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Explore our various category of products</h1>
      <div className="categories-container">
        <div className="category-container">
          <img src={fruit} alt="image of fruits" onClick={() => navigate("/products/fruits")}></img>
          <Link to="/products/fruits">Fruits</Link>
        </div>
        <div className="category-container">
          <img src={vegetables} alt="image of vegetables" onClick={() => navigate("/products/vegetables")}></img>
          <Link to="/products/vegetables">Vegetables</Link>
        </div>
        <div className="category-container">
          <img src={frozen} alt="image of freezers" onClick={() => navigate("/products/frozen")}></img>
          <Link to="/products/frozen">Frozen Foods</Link>
        </div>
        <div className="category-container">
          <img src={beverages} alt="image of beverages" onClick={() => navigate("/products/drinks")}></img>
          <Link to="/products/drinks">Drinks</Link>
        </div>
        <div className="category-container">
          <img src={meats} alt="image of meats" onClick={() => navigate("/products/meats")}></img>
          <Link to="/products/meats">Meats</Link>
        </div>
        <div className="category-container">
          <img src={dairy} alt="image of dairy" onClick={() => navigate("/products/dairy")}></img>
          <Link to="/products/dairy">Dairy</Link>
        </div>
      </div>
    </div>
  )
}
