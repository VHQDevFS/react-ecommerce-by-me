import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { deleteCartItem, updateQuantity } from '../../Redux/Cart/cartSlice'
import Button from '../Button/Button'


const CartItem = ({ item }) => {
  const [itemCart, setCartItem] = useState(item)
  const [quantityValue, setQuantityValue] = useState(item.quantity)

  const dispatch = useDispatch()
  useEffect(() => {
    setCartItem(item)
    setQuantityValue(item.quantity)
  }, [item, item.quantity])

  const updateQuantityValue = option => {
    if (option === '+') {
      dispatch(updateQuantity({ id: item.id, quantityValue: quantityValue + 1 }))
    }
    if (option === '-') {
      dispatch(
        updateQuantity({
          id: item.id,
          quantityValue: quantityValue - 1 === 0 ? 1 : quantityValue - 1
        })
      )
    }
  }

  const handleDeleteCartItem = () => {
    toast.success('Deleted product')
    dispatch(deleteCartItem(item.id))
  }

  return (
    <div className="cart-product">
      <div className="left">
        <div className="img">
          <img src={itemCart.image} alt="cart-product-img" />
        </div>
        <div className="info">
          <h4 className="title">
            Product:
            <span>{itemCart.title}</span>
          </h4>
          <p className="category">Category: {itemCart.category}</p>
          <span className="price">Price: ${itemCart.price} </span>
        </div>
      </div>

      <div className="right">
        <div className="quantity">
          <button
            className="quantity__btn info__quantity--minus"
            onClick={() => updateQuantityValue('-')}
          >
            <i className="fas fa-minus"></i>
          </button>

          <span className="quantity__number">{quantityValue}</span>

          <button
            className="quantity__btn info__quantity--add"
            onClick={() => updateQuantityValue('+')}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <Button color="light" onClick={handleDeleteCartItem}>
          <i className="fas fa-trash icon"></i>
        </Button>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  )
}

export default CartItem
