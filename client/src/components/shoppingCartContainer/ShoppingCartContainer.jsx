import {useState, useEffect} from "react"
import {getUserProducts, deleteFromCart, addToCart, decrementCount} from "../../services/users"
import ShoppingTotal from "../shoppingTotal/ShoppingTotal"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import ProductTotal from "../productTotal/ProductTotal"
import "./shoppingCart.css"
import {AiFillCloseCircle} from "react-icons/ai"
import {VscTrash} from "react-icons/vsc"

export default function ShoppingCartContainer(props) {
  const [products, setProducts] = useState([])
  const [productList, setProductList] = useState([])
  const id = localStorage.getItem("id")

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getUserProducts(id)
      const ids = products.map((product) => product.id)
      setProducts(products)
      // filter for just unique values to display on the shopping cart page
      setProductList(products.filter(({id}, index) => !ids.includes(id, index + 1)))
    }
    fetchProducts()
  }, [id])

  const checkQuantity = (list_id, number) => {
    //length of each specific product array to display quantity on the page
    number = products?.filter((product) => product.id === list_id).length
    //if a specific product quantity hits 0 reloads page to remove product from the page
    if (number === 0) {
      window.location.reload(false)
    } else {
      return number
    }
  }

  const handleDelete = async (product_id) => {
    //api delete request to remove all of one specific item from the cart
    await deleteFromCart(id, product_id)
    window.location.reload(false)
  }

  const handleDecrement = (product_id) => {
    let flag = true
    // map through products array and removes/splice an item that matches the product id
    products?.map((item, index) => {
      if (item.id === product_id && flag === true) {
        products.splice(index, 1)
        flag = false
      }
      return flag
    })
    //replace the old products array with the new one
    setProducts([...products])
    //the length of each product represents the amount of each item in the cart
    props.setCount(products.length)
    const id = localStorage.getItem("id")
    //api delete request to remove product in the database
    decrementCount(id, product_id)
  }

  const handleIncrement = (product_id) => {
    //filter for specific product and add to previous products array
    let product = productList.filter((item) => item.id === product_id)
    setProducts([...products, product[0]])
    // set new count for increase in product quantity
    props.setCount(products.length)
    const id = localStorage.getItem("id")
    // api post request to add the new product quantity increase
    addToCart(id, product_id)
  }

  return (
    <div className="shopping-cart">
      <h4>Your Shopping Cart</h4>
      <div>
        <div className="headers-container">
          <div className="cart-headers1">
            <h4>Product</h4>
          </div>
          <div className="cart-headers2">
            <h4>Price</h4>
          </div>
          <div className="cart-headers3">
            <h4>Quantity</h4>
          </div>
          <div>
            <h4>Total</h4>
          </div>
        </div>
        {productList?.length === 0 ? (
          <h5 className="cart-title">Your shopping Cart is empty. Please continue shopping</h5>
        ) : (
          <div className="cart-content-container">
            {productList?.map((list, index) => {
              return (
                <div key={index} className="cart-container">
                  <div className="cart-text-container">
                    <h4>{list.name}</h4>
                  </div>
                  <div className="cart-text-container-2">
                    <h4>${list.price.toFixed(2)}</h4>
                  </div>
                  <div className="increment-container">
                    <button onClick={() => handleDecrement(list.id, list.number)}>{checkQuantity(list.id, list.number) <= 1 ? <VscTrash /> : "-"}</button>
                    <div className="count">{checkQuantity(list.id, list.number)}</div>
                    <button onClick={() => handleIncrement(list.id, list.number)}>+</button>
                  </div>
                  <div className="cart-text-container-2">
                    <ProductTotal products={products} price={list.price.toFixed(2)} list_id={list.id} />
                  </div>
                  <div className="cart-button-container">
                    <button>
                      <AiFillCloseCircle onClick={() => handleDelete(list.id)} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div className="checkout-button">
        <CheckoutButton />
      </div>
      <ShoppingTotal products={products} />
    </div>
  )
}
