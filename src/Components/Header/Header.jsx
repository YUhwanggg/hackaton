import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [linkText, setLinkText] = useState(
    localStorage.getItem("linkLabel") || "Регистрация"
  );
  const [linkTo, setLinkTo] = useState(
    localStorage.getItem("linkTo") || "/reg"
  );

  const handleClickLink = () => {
    setLinkText(linkText === "Авторизоваться" ? "Регистрация" : "Авторизоваться");
    setLinkTo(linkTo === "/auth" ? "/reg" : "/auth");
  };

  useEffect(() => {
    localStorage.setItem("linkLabel", linkText);
    localStorage.setItem("linkTo", linkTo);
  }, [linkText, linkTo]);

  return (
    <div id="container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Packages</li>
            <li>Tours</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <Link onClick={() => handleClickLink()} to={linkTo}>
            {linkText}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
