import React, { useState } from "react";
import s from "./Auth.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterBackground from "../../Assets/img/registrBackground.png";
import { AUTH } from "../../Constants/api";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getRegister = () => {
    navigate("/registration");
  };

  const postUsers = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(AUTH, {
        username,
        password,
      });
      const access = response.data.access;
      const refresh = response.data.refresh;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      if (response.status === 200 || 201) {
        return navigate("/");
      } else if (!response.status) {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main id={s.authContainer}>
        <div id="container" className={s.authWrapper}>
          <div className={s.authImg}>
            <img src={RegisterBackground} alt="img" />
          </div>
          <div className={s.authForm}>
            <h1>Welcome!</h1>
            <form onSubmit={postUsers}>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Auth;
