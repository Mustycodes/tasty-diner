import { images } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.scss";

const NavItem = ({ children }) => (
  <li className="navbar__item p--font-opensans">{children}</li>
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logo} alt="tasty diner's logo" />
      </div>
      <ul className="navbar__links">
        <NavItem>
          <a href="#!">Home</a>
        </NavItem>
        <NavItem>
          <a href="#!">About</a>
        </NavItem>
        <NavItem>
          <a href="#!">Menu</a>
        </NavItem>
        <NavItem>
          <a href="#!">Awards</a>
        </NavItem>
        <NavItem>
          <a href="#!">Contact Us</a>
        </NavItem>
      </ul>
      <div className="navbar__actions">
        <a href="#!" className="navbar__action-link p--font-opensans">Log In / Register</a>
        <div />
        <a href="#!" className="navbar__action-link p--font-opensans">Book Table</a>
      </div>
      {/* Add hamburger menu and div and links */}
    </nav>
  );
};

export default Navbar;
