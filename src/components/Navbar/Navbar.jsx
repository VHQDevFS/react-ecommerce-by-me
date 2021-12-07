import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  // sticky navbar
  useEffect(() => {
    const stickyNavbar = () => {
      const topBorder = document.body.getBoundingClientRect().top

      topBorder >= 0 && topBorder !== null
        ? document.querySelector('.header').classList.remove('fixed')
        : document.querySelector('.header').classList.add('fixed')
    }
    window.addEventListener('scroll', stickyNavbar)
    return () => {
      window.removeEventListener('scroll', stickyNavbar)
    }
  }, [])
  const { cartProducts } = useSelector(state => state.carts)

  const totalProducts = cartProducts && cartProducts.length > 0 ? cartProducts.length : 0

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo__img" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="options">
        <div className="options__item">
          <i className="fas fa-search options__item--icon"></i>
          {/* <i className="fas fa-times"></i> */}
        </div>
        <div className="options__item">
          <Link to="/login" className="options__item--link">
            Login
          </Link>
        </div>
        <div className="options__item">
          <Link to="/cart" className="options__item--link">
            Cart
            <span>({totalProducts})</span>
            <i className="fas fa-shopping-bag"></i>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
