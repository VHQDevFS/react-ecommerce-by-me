import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import useQuantity from '../../hooks/useQuantity'
import { addToCart } from '../../Redux/Cart/cartSlice'
import { getProductDetail, removeProductSelected } from '../../Redux/products/productsSlice'
import Button from '../Button/Button'
import Loading from '../Loading/Loading'
import StarRating from '../StarRating/StarRating'


const ProductDetail = () => {
  const { productId } = useParams()
  const { product, loading } = useSelector(state => state.products)
  const { title, price, category, description, image, rating } = product

  const [quantity, handleIncrement, handleDecrement] = useQuantity(1)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDetail(productId))
    return () => {
      dispatch(removeProductSelected())
    }
  }, [dispatch, productId])
  const navigate = useNavigate()
  const handleAddToCart = () => {
    navigate('/cart')
    console.log(productId)
    dispatch(
      addToCart({
        title,
        price,
        category,
        image,
        id: Number(productId),
        quantity
      })
    )
  }

  return (
    <div className="product-detail">
      <div className="grid wide">
        {loading ? (
          <div className="col l-12 c-12 m-12">
            <div className="loading">
              <Loading />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col l-6 m-6 c-12">
              <div className="product__img">
                <img src={image} alt="product_image" />
              </div>
            </div>
            <div className="col l-6 m-6 c-12">
              <div className="info">
                <h3 className="info__title">{title}</h3>
                <span className="info__price">
                  {'$'}
                  {price}
                </span>

                <h4 className="info__category">Category: {category}</h4>
                <div className="info__rating">
                  <StarRating rate={rating?.rate || 5} />
                  <h6>{rating?.count || 400} reviews</h6>
                </div>

                <p className="info__description">{description}</p>

                <div className="info__quantity">
                  <div className="quantity">
                    <button
                      className="quantity__btn info__quantity--minus"
                      onClick={handleDecrement}
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <span className="quantity__number">{quantity}</span>

                    <button className="quantity__btn info__quantity--add" onClick={handleIncrement}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <Button onClick={handleAddToCart}>
                    <i className="fas fa-cart-plus icon"></i>
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
