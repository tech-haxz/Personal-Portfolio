import { useRef, useState } from "react";
import logo from "../../assets/logo1.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const menuOpen = () =>{
    menuRef.current.style.right='0';
  }
  
  const menuClose = () =>{
    menuRef.current.style.right='-100%'
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="logo_portfolio" width={150} id="logo" />
      <img src={menu_open} alt="menu" className="nav-mob-open" onClick={menuOpen}/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={menuClose}/>
        <li>
          <AnchorLink className="anchor-link" href={"#home"}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href={"#about"}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href={"#work"}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>

          {menu === "work" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href={"#services"}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>

          {menu === "services" ? (
            <img src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href={"#contact"}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} alt="underline" /> : <></>}
        </li>
      </ul>

      <div className="connect">
        <AnchorLink className="anchor-link" offset={50} href={"#contact"}>
          Connect With Me{" "}
        </AnchorLink>
      </div>
    </nav>
  );
};

export default NavBar;
