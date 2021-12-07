import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = ({ disableFixed }) => {
  const { cartProducts } = useSelector(state => state.carts)

  const totalProducts = cartProducts && cartProducts.length > 0 ? cartProducts.length : 0

  const [stickyClass, setStickyClass] = useState('')

  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        const windowHeight = window.scrollY
        // window height
        windowHeight > 150 ? setStickyClass('fixed') : setStickyClass('')
      }
    }
    if (!disableFixed) window.addEventListener('scroll', stickNavbar)

    return () => {
      if (!disableFixed) window.removeEventListener('scroll', stickNavbar)
    }
  }, [disableFixed])
  return (
    <nav className={`header ${stickyClass}`}>
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
