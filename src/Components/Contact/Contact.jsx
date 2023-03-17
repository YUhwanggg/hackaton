import React from "react";
import s from "./Contact.module.scss";
import { useRef } from "react";
import { message } from "antd";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        className={s.tag}
      >
        Get In Touch
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
      >
        Contact us by mail
      </motion.p>
      <motion.form
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        ref={form}
        onSubmit={sendEmail}
        className={s.btn}
      >
        <input type="email" name="user_email" placeholder="Enter your email" />
        {contextHolder}
        <button value="send" type="submit" onClick={openMessage}>
          Send
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
