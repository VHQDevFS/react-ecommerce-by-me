import Button from '../Button/Button'
import './banner.scss'

const Banner = () => {
  return (
    <div className="banner">
      <div className="grid ">
        <div className="banner-content">
          <span>New Inspiration 2020</span>
          <h1>CLOTHING MADE FOR YOU!</h1>
          <p>Trending from men and women style collection</p>
          <div className="btn-group">
            <div className="btn__item">
              <Button color="dark">Shop Women's</Button>
            </div>
            <div className="btn__item">
              <Button color="light">Shop Men's</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
