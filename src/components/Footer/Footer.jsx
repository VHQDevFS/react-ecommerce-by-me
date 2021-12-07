
import logo from '../../assets/img/logo.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className=" grid wide">
        <div className="row">
          <div className="footer__item footer__item--info col">
            <img src={logo} alt="logo" />
            <p className="footer__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="footer__item col l-3 m-6 c-12 ">
            <h1 className="title">quick links</h1>
            <ul className="list">
              <li className="list__item">about us</li>
              <li className="list__item">faq's</li>
              <li className="list__item">customer services</li>
              <li className="list__item">contact us</li>
            </ul>
          </div>
          <div className="footer__item col l-3 m-6 c-12 ">
            <h1 className="title">information</h1>
            <ul className="list">
              <li className="list__item">about us</li>
              <li className="list__item">contact us</li>
              <li className="list__item">sizing guide</li>
              <li className="list__item">customer services</li>
            </ul>
          </div>
          <div className="footer__item col l-3 m-6 c-12 ">
            <h1 className="title">contact</h1>
            <ul className="list">
              <li className="list__item">
                <div>
                  <i className="icon fas fa-map-marker-alt" />
                  Location: 2750 Quadra Street Victoria,
                </div>
                Canada
              </li>
              <li className="list__item">
                <i className="icon fas fa-phone"></i>Call Us: (+123) 456-7898
              </li>
              <li className="list__item email">
                <i className="icon far fa-envelope"></i>Email Us: support@novine.com
              </li>
              <li className="list__item">
                <i className="icon fas fa-fax"></i>Fax: +123456
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
