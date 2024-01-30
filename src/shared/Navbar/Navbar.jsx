import logo2 from "../../assets/images/logo2.svg";
import logo from "../../assets/images/logo1.png";
import cart from "../../assets/images/Shopping Cart.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.screenY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="container">
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
          <img src={logo2} alt="logo" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li className="nav-logo">
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <hr />
          </li>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About us</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contact us</a>
          </li>
          <li className="navbar-cart-icon">
            <a href="#">
              <img  src={cart} alt="" />
            </a>
          </li>
          <li className="sign-btn">
            <a href="#">
              <button>Sign up</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
