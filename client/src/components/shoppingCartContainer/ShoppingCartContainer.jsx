import {useState, useEffect} from "react"
import {getUserProducts} from "../../services/users"
import {deleteFromCart} from "../../services/users"
import ShoppingTotal from "../shoppingTotal/ShoppingTotal"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import "./shoppingCart.css"

export default function ShoppingCartContainer() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const id = localStorage.getItem("id")
      const products = await getUserProducts(id)
      setProducts(products)
    }
    fetchProducts()
  }, [])

  const handleDelete = async (product_id) => {
    const id = localStorage.getItem("id")
    await deleteFromCart(id, product_id)
    window.location.reload(false)
  }

  const countUp = (num) => {
    num += 1
  }

  const countDown = (num) => {
    if (num <= 0) {
      num = 0
    } else {
      num += 1
    }
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
                <div className="counter">
                  <button onClick={() => countDown(num)}>-</button>
                  <p>{num}</p>
                  <button onClick={() => countUp(num)}>+</button>
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
