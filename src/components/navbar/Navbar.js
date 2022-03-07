import { useState } from "react";
import NavbarStyled from "./Navbar.styled";
//import logo from "../../utils/boardgamehub-logo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!isOpen);
    console.log("Hey");
  };

  return (
    <>
      <NavbarStyled>
        <nav className="navbar">
          <div
            className={isOpen ? "burger-menu mobile-menu open" : "burger-menu"}
            onClick={toggleClass}
          >
            <span className="burger-menu__dash"></span>
            <span className="burger-menu__dash--middle"></span>
            <span className="burger-menu__dash"></span>
          </div>

          <div className="navbar__logo">
            <img
              className="navbar__logo--image"
              src={"https://imgur.com/a/UxtgRTP"}
              alt="Boardgame Hub"
              width="40px"
            />
          </div>

          <ul className="navlinks">
            <li className="navlinks__link mobile-menu__item">All Matches</li>
            <li className="navlinks__link mobile-menu__item">My Matches</li>
            <li className="navlinks__link mobile-menu__item">New Match</li>
            <li className="navlinks__link mobile-menu__item">My Boardgames</li>
            <li className="navlinks__link--login mobile-menu__item">Login</li>
            <li className="navlinks__link--signup mobile-menu__item">
              Sign up
            </li>
          </ul>
        </nav>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
