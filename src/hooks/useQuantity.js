import { useState } from 'react'

const useQuantity = initialValue => {
  const [quantity, setQuantity] = useState(initialValue)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }

  return [quantity, handleIncrement, handleDecrement]
}

export default useQuantity
