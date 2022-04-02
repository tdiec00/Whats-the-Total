import {useState, useEffect} from "react"
import {getUserProducts, deleteFromCart, addToCart, decrementCount} from "../../services/users"
import ShoppingTotal from "../shoppingTotal/ShoppingTotal"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import ProductTotal from "../productTotal/ProductTotal"
import "./shoppingCart.css"
import {AiFillCloseCircle} from "react-icons/ai"

export default function ShoppingCartContainer(props) {
  const [products, setProducts] = useState([])
  const [productList, setProductList] = useState([])
  const id = localStorage.getItem("id")

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getUserProducts(id)
      const ids = products.map((product) => product.id)
      setProducts(products)
      setProductList(products.filter(({id}, index) => !ids.includes(id, index + 1)))
    }
    fetchProducts()
  }, [id])

  const checkQuantity = (list_id, number) => {
    return (number = products?.filter((product) => product.id === list_id).length)
  }

  const handleDelete = async (product_id) => {
    await deleteFromCart(id, product_id)
    window.location.reload(false)
  }

  const handleDecrement = (product_id) => {
    let flag = true
    products?.map((item, index) => {
      if (item.id === product_id && flag === true) {
        products.splice(index, 1)
        flag = false
      }
      return flag
    })
    setProducts([...products])
    props.setCount(products.length)
    const id = localStorage.getItem("id")
    decrementCount(id, product_id)
  }

  const handleIncrement = (product_id) => {
    let product = productList.filter((item) => item.id === product_id)
    setProducts([...products, product[0]])
    props.setCount(products.length)
    const id = localStorage.getItem("id")
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
                    <button onClick={() => handleDecrement(list.id, list.number)}>-</button>
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
