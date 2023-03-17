import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PROFILE, USERINFO } from "../../Constants/api";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [profile, setProfile] = useState([]);

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

  const getProfile = async () => {
    const res = await axios.get(PROFILE);
    setProfile(res.data);
  };

  const getInfo = async () => {
    await axios
      .get(USERINFO, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className={s.header}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tours">Tours</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.right}>
          {token ? (
            <span className={s.span} onClick={logout}>
              Log out
            </span>
          ) : (
            <button onClick={handleAuth}>Sign In</button>
          )}
          {token ? <></> : <button onClick={handleRegister}>Sign Up</button>}
          {token ? (
            <hr
              style={{
                height: "30px",
              }}
            />
          ) : (
            <></>
          )}
          {token ? (
            <Link to="/profile">
              <Avatar className={s.ava} src={<UserOutlined />} alt="profile" />
            </Link>
          ) : (
            <></>
          )}
          {token ? (
            <>
              {userInfo.map((info) => (
                <h1
                  style={{
                    color: "white",
                  }}
                >
                  {info.username}
                </h1>
              ))}
            </>
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
