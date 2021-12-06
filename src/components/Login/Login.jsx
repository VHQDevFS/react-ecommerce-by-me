import Button from '../Button/Button'
import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="grid wide">
        <div className="row">
          <div className="col l-6 m-12 c-12">
            <div className="login__left">
              <h3 className="login__title">
                <span className="dot"></span>
                <span>Login</span>
              </h3>
              <form className="login-form" autoComplete="off">
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                />

                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />

                <Button children="login" type="submit" />
              </form>
            </div>
          </div>

          <div className="col l-6 m-12 c-12">
            <div className="login__right">
              <h3 className="login__title">
                <span className="dot"></span>
                <span>NEW CUSTOMER</span>
              </h3>

              <h4>Create an account</h4>
              <p>
                Sign up for a free account at our store. Registration is quick and easy. It allows
                you to be able to order from our shop. To start shopping click register.
              </p>
              <Button color="light" children="create an account" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
