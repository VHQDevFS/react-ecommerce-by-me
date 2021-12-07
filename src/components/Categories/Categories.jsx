
import CategoryItem from './CategoryItem'
const Categories = () => {
  return (
    <div className="categories">
      <div className="grid wide">
        <div className="row">
          {fakeData.map(data => (
            <CategoryItem key={data.category} category={data.category} image={data.img} />
          ))}
        </div>
      </div>
    </div>
  )
}

const fakeData = [
  {
    category: "women's clothing",
    img: 'https://novine-react.envytheme.com/_next/static/images/5-da7b0bae10e707351e9c5bb0bed5219a.jpg'
  },
  {
    category: 'electronics',
    img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    category: 'jewelery',
    img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    category: "men's clothing",
    img: 'https://novine-react.envytheme.com/_next/static/images/6-0f68829bdac0b6b09082d3123db91998.jpg'
  }
]

export default Categories
