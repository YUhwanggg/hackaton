import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { PROFILE } from "../../Constants/api";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/reg");
  };
  const handleAuth = () => {
    navigate("/auth");
  };

  const token = localStorage.getItem("access");

  const logout = () => {
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    navigate("/reg");
  };

  const [showNav, setShowNav] = useState(false);

  const getProfile = async () => {
    const res = await axios.get(PROFILE)
    setProfile(res.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  const [profile, setProfile] = useState([])

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
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={s.right}>
          {token ? (
            <span onClick={logout}>Log out</span>
          ) : (
            <button onClick={handleAuth}>Sign In</button>
          )}
          {token ? (
            <></>
          ) : (
            <button onClick={handleRegister}>Sign Up</button>
          )}
          {token ? (
            <Link to='/profile'>
              {profile.map((prof) => (
                <img className={s.ava} src={prof.photo} alt="profile" />
              ))}
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className={s.burger}>
          <label className={s.label} htmlFor="check">
            <input
              type="checkbox"
              id="check"
              className={s.check}
              onClick={() => setShowNav(!showNav)}
            />
            <span className={s.span}></span>
            <span className={s.span}></span>
            <span className={s.span}></span>
          </label>
        </div>
        {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
      </header>
    </div>
  );
};

export default Header;
