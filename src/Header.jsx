import React, { useState } from "react";
import logo from "./images/logo.png";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpened(false);
    }
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <>
      <nav className="navbar">
        <section className="h-wrapper">
          <div className="flexCenter paddings innerwidth h-container">
            <img width={100} src={logo} alt="no logo" />
            <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
              <div
                className="flexCenter h-menu"
                style={getMenuStyles(menuOpened)}
              >
                <a onClick={() => handleMenuItemClick("popular-residencies")}>
                  Residencies
                </a>
                <a onClick={() => handleMenuItemClick("our-value")}>Our Value</a>
                <a onClick={() => handleMenuItemClick("contact-us")}>
                  Contact Us
                </a>
                <a onClick={() => handleMenuItemClick("get-started")}>
                  Get Started
                </a>
                <button className="button">
                  <a onClick={() => handleMenuItemClick("contact")}>
                    Contact
                  </a>
                </button>
              </div>
            </OutsideClickHandler>
            <div
              className="menu-icon"
              onClick={() => setMenuOpened((prev) => !prev)}
            >
              <BiMenuAltRight size={30} />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Header;
