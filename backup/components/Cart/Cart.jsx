import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import './cart.scss'
import CartItem from './CartItem'

const Cart = () => {
  const { cartProducts } = useSelector(state => state.carts)
  const [subTotal, setSubtotal] = useState(0)

  useEffect(() => {
    const subTotal = cartProducts.reduce((total, element) => {
      return total + Number(element.quantity) * Number(element.price)
    }, 0)

    if (subTotal) setSubtotal(subTotal.toFixed(2))
    else setSubtotal(0)
  }, [cartProducts])
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className="top">
              <Button onClick={() => navigate(-1)}>back</Button>
              <div className="shopping-bag">
                <span>
                  Shopping Bag(
                  {cartProducts && cartProducts.length > 0 ? cartProducts.length : 0})
                </span>
              </div>
              <Button onClick={() => navigate('/')}>continue shopping</Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col l-8 m-12 c-12">
            {cartProducts &&
              cartProducts.length > 0 &&
              cartProducts.map(cartProduct => <CartItem key={cartProduct.id} item={cartProduct} />)}
          </div>
          <div className="col l-4 m-12 c-12">
            <div className="checkout">
              <h1>ORDER SUMMARY</h1>
              <div className="text">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="text">
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className="text total">
                <span>Total</span>
                <span>${subTotal !== 0 ? Number(parseFloat(subTotal) + 10).toFixed(2) : 0}</span>
              </div>

              <Button wFull>CHECKOUT NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
