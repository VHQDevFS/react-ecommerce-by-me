import { useDispatch } from 'react-redux'
import { getProductByCategory } from '../../Redux/products/productsSlice'
import './categories.scss'

const CategoryItem = ({ category, image }) => {
  const dispatch = useDispatch()

  return (
    <div className="col l-3 m-6 c-12" onClick={() => dispatch(getProductByCategory(category))}>
      <div className="categories__item">
        <img src={image} alt="category_image" />
        <h4>{category === 'jewelery' ? 'jewelry' : category}</h4>
      </div>
    </div>
  )
}

export default CategoryItem
