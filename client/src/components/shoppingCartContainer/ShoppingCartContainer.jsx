import {useState, useEffect} from "react"
import {getUserProducts} from "../../services/users"
import {deleteFromCart} from "../../services/users"
import ShoppingTotal from "../shoppingTotal/ShoppingTotal"
import CheckoutButton from "../checkoutButton/CheckoutButton"
import "./shoppingCart.css"

export default function ShoppingCartContainer() {
  const [products, setProducts] = useState([])
  //testing component
  // const [number, setNumber] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const id = localStorage.getItem("id")
      const products = await getUserProducts(id)
      setProducts(products)
      setNumber(new Array(products.length).fill(0))
    }
    fetchProducts()
  }, [])

  const handleDelete = async (product_id) => {
    const id = localStorage.getItem("id")
    await deleteFromCart(id, product_id)
    window.location.reload(false)
  }

  // Working on this component. Does not work yet

  // const countUp = (e, index) => {
  //   e.preventDefault()
  //   arr[index] += 1
  //   console.log(arr)
  //   arr.filter((num, i) => {
  //     if (i === index) {
  //       defaultNum = arr[index]
  //     }
  //     console.log(defaultNum)
  //   })
  //   setNumber(arr)
  // }

  // const countDown = (e, index) => {
  //   e.preventDefault()
  //   if (number[index] <= 0) {
  //     arr[index] = 0
  //     setNumber(arr)
  //   } else {
  //     arr[index] -= 1
  //     setNumber(arr)
  //   }
  // }

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
                {/* <div className="counter">
                  {number && <button onClick={(e) => countDown(e, index)}>-</button>}
                  <p>{defaultNum}</p>
                  {number && <button onClick={(e) => countUp(e, index)}>+</button>}
                </div> */}
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
