import {useState, useEffect} from "react"
import {getUserProducts} from "../../services/users"
import {deleteFromCart} from "../../services/users"
import {updateShoppingCart} from "../../services/shoppincart"
import ShoppingTotal from "../shoppingTotal/ShoppingTotal"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import "./shoppingCart.css"

export default function ShoppingCartContainer() {
  const [products, setProducts] = useState([])
  const id = localStorage.getItem("id")

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getUserProducts(id)
      setProducts(products)
    }
    fetchProducts()
  }, [])

  const handleDelete = async (product_id) => {
    await deleteFromCart(id, product_id)
    window.location.reload(false)
  }

  const handleDecrement = (product_id) => {
    setProducts((products) => products.map((item) => (item.id === product_id ? {...item, number: item.number - 1} : item)))
    let cartData = products.filter((product) => product_id === product.id)
    console.log(cartData.number)
    updateCarQuantity(product_id, cartData)
  }

  const handleIncrement = (product_id) => {
    setProducts((products) => products.map((item) => (item.id === product_id ? {...item, number: item.number + 1} : item)))
    let cartData = products.filter((product) => product_id === product.id)
    console.log(cartData.number)
    updateCarQuantity(product_id, cartData)
  }

  const updateCarQuantity = (product_id, cartData) => {
    let quantity = cartData[0].number + 1
    const updatedProduct = {
      number: quantity,
    }
    console.log(updatedProduct)
    updateShoppingCart(id, product_id, updatedProduct)
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
        </div>
        {products.length === 0 ? (
          <h5 className="cart-title">Your shopping Cart is empty. Please continue shopping</h5>
        ) : (
          products.map((product, index) => {
            return (
              <div key={index} className="cart-container">
                <div className="cart-text-container">
                  <h4>{product.name}</h4>
                </div>
                <div className="cart-text-container-2">
                  <h4>${product.price.toFixed(2)}</h4>
                </div>
                <div className="increment-container">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <div>{product.number}</div>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
                <div className="cart-button-container">
                  <button onClick={() => handleDelete(product.id)}>Remove</button>
                </div>
              </div>
            )
          })
        )}
      </div>
      <div className="checkout-button">
        <CheckoutButton />
      </div>
      <ShoppingTotal products={products} />
    </div>
  )
}
