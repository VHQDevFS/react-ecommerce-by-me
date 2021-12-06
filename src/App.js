import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './app.scss'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductDetail from './pages/ProductDetailPage'

import userApi from './api/userApi'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState('')
  useEffect(() => {
    const login = async () => {
      try {
        const res = await userApi.login({
          username: 'mor_314',
          password: '83r5^_'
        })
        console.log(res.data)
        // setUser(res.token)
      } catch (error) {
        console.log(error)
      }
    }

    login()
  }, [])
  return (
    <Router>
      {/* {!user && <Navigate to="/login" />} */}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
