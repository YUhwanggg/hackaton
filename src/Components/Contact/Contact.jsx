import React from "react";
import s from "./Contact.module.scss";
import { useRef } from "react";
import { message } from "antd";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rnkeocu",
        "template_cxwrf3v",
        form.current,
        "rVxs1omlSkc0Q3S1P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
      style: {
        marginTop: "100px",
      },
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Sent!",
        duration: 2,
        style: {
          marginTop: "100px",
        },
      });
    }, 1000);
  };
  return (
    <div className={s.contact}>
      <h1>Связаться</h1>
      <p>Обращайтесь к нам по почте</p>
      <form ref={form} onSubmit={sendEmail} className={s.btn}>
        <input type="email" name="user_email" placeholder="Введти свою почту" />
        {contextHolder}
        <button value="send" type="submit" onClick={openMessage}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Contact;
