import logo from "../../assets/images/logo2.svg";
import cart from "../../assets/images/Shopping Cart.png";
const Navbar = () => {
    return (
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <img src={cart} alt="cart" />
        <button>Sign up</button>
      </div>
    );
};

export default Navbar;