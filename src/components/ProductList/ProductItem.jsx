import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addToCart } from '../../Redux/Cart/cartSlice'
import Button from '../Button/Button'
import StarRating from '../StarRating/StarRating'
import './product-list.scss'

const ProductItem = ({ image, price, title, rate, id, category }) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    toast.success('Added to the cart')

    dispatch(
      addToCart({
        title,
        price,
        category,
        image,
        id,
        quantity: 1
      })
    )
  }
  return (
    <>
      <div className="col l-3 m-6 c-6">
        <div className="product">
          <Link to={`/products/${id}`}>
            <div className="product__image">
              <img src={image} alt="product_image" />
            </div>

            <div className="product__content">
              <h3>{title}</h3>
              <h5>${price}</h5>
              <div className="rates">
                <StarRating rate={rate} />
              </div>
            </div>

            <ul>
              <li>
                <i className="fas fa-eye"></i>
              </li>
              <li>
                <i className="far fa-heart"></i>
              </li>
              <li>
                <i className="fas fa-sync"></i>
              </li>
            </ul>
          </Link>
          <Button onClick={handleAddToCart} wFull color="light">
            add to cart
          </Button>
        </div>
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
    </>
  )
}

export default ProductItem
