

const StarRating = ({ rate }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index++
        return (
          <span className="star" key={index}>
            {index <= (Math.round(rate) >= 5 ? 5 : Math.round(rate)) ? (
              <i className="fas fa-star icon"></i>
            ) : (
              <i className="far fa-star icon "></i>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default StarRating
