import React, { useState } from "react";
import s from "./Registration.module.scss";
import RegisterBackground from "../../Assets/img/registrBackground.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from 'antd';
import { REGISTER, AUTH } from "../../Constants/api";


const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("")
  const [email, setEmail] = useState("");
  const [incorrect, setIncorrect] = useState("");

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This username is already taked',
      style: {
        marginTop: '100px',
      }
    });
  };

  const AuthUsers = async () => {
    try {
      const response = await axios.post(AUTH, {
        username,
        password,
      });
      if (response.status === 200 || 201) {
        const access = response.data.access;
        const refresh = response.data.refresh;

        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        navigate("/");
      } else if (!response.status) {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postUsers = async (e) => {
    e.preventDefault();
    if (password !== password_confirm) {
      setIncorrect("Password mismatch!");
    } else{
      try {
        const response = await axios.post(REGISTER, {
          username,
          email,
          password,
          password_confirm,
        });
        if (response.status === 200 || 201) {
          AuthUsers()
        }
      } catch (e) {
        error()
      }
    }
  };


  return (
    <>
      <main id={s.registrationContainer}>
        <div className={s.registrWrapper}>
          <div className={s.registrImg}>
            <img src={RegisterBackground} alt="img" />
          </div>
          <div className={s.registerForm}>
            <h1>Welcome!</h1>
            <form onSubmit={postUsers}>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="mail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password*"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Repeat Password*"
                value={password_confirm}
                onChange={(e) => setPassword_confirm(e.target.value)}
              />
              {incorrect && <div>{incorrect}</div>}
              {contextHolder}
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registration;
