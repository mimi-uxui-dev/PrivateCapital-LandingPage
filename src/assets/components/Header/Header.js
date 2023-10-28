/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button } from "../Button";
import logo from "../../images/logo.png";
import menuIcon from "../../images/menu.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const openMenu = () => setOpen(true);

  return (
    <header className="div-2">
      <img className="logo" alt="Logo" src={logo} />
      <div className="navbar">
        <a href="#DISCOVER" className="text-wrapper">
          Discover
        </a>
        <a href="#EXPERTISE" className="text-wrapper">
          Expertise
        </a>
        <a href="#MaximumValue" className="text-wrapper">
          Maximize Value
        </a>
        <Button href="#Contact" text="Contact Us" />
      </div>

      <img onClick={openMenu} className="mobileMenu" src={menuIcon} alt="" />
      <div className={`navbarMobile ${open ? "display" : "none"}`}>
        <a href="#DISCOVER" className="text-wrapper">
          Discover
        </a>
        <a href="#EXPERTISE" className="text-wrapper">
          Expertise
        </a>
        <a href="#MaximumValue" className="text-wrapper">
          Maximize Value
        </a>
        <a onClick={closeMenu} href="" className="x text-wrapper">
          X
        </a>
        <Button href="#Contact" text="Contact Us" />
      </div>
    </header>
  );
}

export default Header;
