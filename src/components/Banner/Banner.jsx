import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
SwiperCore.use([Pagination, Navigation])

const Banner = () => {
  return (
    <div className="banner">
      <div className="grid">
        <div className="banner-content">
          <span>Limited Time Offer</span>
          <h1>Winter-spring 2021!</h1>
          <p>Take 20% Off ‘Sale Must-Haves'</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://novine-react.envytheme.com/_next/static/media/banner-new-bg13.a8ec6cd1afcbfd316bd82c3541561cb5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://novine-react.envytheme.com/_next/static/media/banner-new-bg14.33e1c6c5359f202bec01ba4af05d7175.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://novine-react.envytheme.com/_next/static/media/banner-new-bg15.1bbafb66591dd1c5a5977e80a835e389.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
