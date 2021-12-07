import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './sass/index.scss'
import Page404 from './components/Page404/Page404'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductDetail from './pages/ProductDetailPage'


function App() {
    return (
    <Router>
      {/* {!user && <Navigate to="/login" />} */}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
