import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Discover Your Style, Shop Your Way</h1>
          <img
            src="https://i.pinimg.com/564x/65/00/51/650051b030e93ee301a31ed6f514a00f.jpg"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Embrace the latest trends and timeless classics with our curated
            fashion collection. From chic everyday wear to elegant evening
            ensembles, discover pieces that effortlessly enhance your style and
            express your personality. Elevate your wardrobe with fashion that
            speaks to you.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://i.pinimg.com/564x/65/00/51/650051b030e93ee301a31ed6f514a00f.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
