import React, { useRef } from "react";
import s from "./About.module.scss";
import { Card } from "antd";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div id="container">
        <div className={s.content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
            }}
          >
            About Us
          </motion.h1>
          <div className={s.cards}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -150 },
              }}
            >
              <Card
                style={{
                  width: 280,
                  height: 300,
                  padding: 30,
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0px 0px 1px rgba(0 0 0.25)",
                }}
              >
                <h1>GUARANTEE</h1>
                <p>
                  Lorem ipsum dolor sit <br /> amet, consectetur <br />{" "}
                  adipiscing elit.{" "}
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -150 },
              }}
            >
              <Card
                style={{
                  width: 280,
                  height: 300,
                  padding: 30,
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0px 0px 1px rgba(0 0 0.25)",
                }}
              >
                <h1>SERVICE</h1>
                <p>
                  Nunc vulputate libero et velit interdum, ac <br /> aliquet
                  odio.{" "}
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -150 },
              }}
            >
              <Card
                style={{
                  width: 280,
                  height: 300,
                  padding: 30,
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: "0px 0px 1px rgba(0 0 0.25)",
                }}
              >
                <h1>EXPERIENCE</h1>
                <p>
                  Lorem ipsum dolor sit <br /> amet, consectetur <br />{" "}
                  adipiscing elit.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
