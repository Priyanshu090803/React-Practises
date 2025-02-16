import { LOGO_URL } from "../Utils/contants"
const Header = () => {
  return (
    <div>
    <div className="Header ">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}

          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header