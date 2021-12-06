import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getProductsSort } from '../../Redux/products/productsSlice'
import Loading from '../Loading/Loading'
import './product-list.scss'
import ProductItem from './ProductItem'

const ProductList = () => {
  const { allProducts, loading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const handleClickToSort = sortBy => {
    dispatch(getProductsSort(sortBy))
  }

  return (
    <div className="product-list">
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <ul className="product-list__filter">
              <li onClick={() => handleClickToSort('asc')}>
                <div>
                  <input type="radio" id="asc" name="sort" />
                  <label for="asc">Newest products</label>
                </div>
              </li>
              <li onClick={() => handleClickToSort('desc')}>
                <div>
                  <input type="radio" id="desc" name="sort" />
                  <label for="desc">Oldest products</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <div className="col l-12 c-12 m-12">
              <div className="loading">
                <Loading />
              </div>
            </div>
          ) : (
            allProducts &&
            allProducts.length >= 0 &&
            allProducts.map(product => (
              <ProductItem
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                rate={product.rating.rate}
                id={product.id}
                category={product.category}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
