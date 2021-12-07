import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Facility from '../components/Facility/Facility'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <ProductList />
      <Facility />
      <Footer />
    </>
  )
}

export default HomePage
