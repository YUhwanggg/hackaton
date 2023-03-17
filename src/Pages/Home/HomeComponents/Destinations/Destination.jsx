import React from "react";
import s from "./Destination.module.scss";
import { motion } from "framer-motion";
import { Card } from "antd";
const { Meta } = Card;
import { Input } from "antd";
const { Search } = Input;
import slide1 from "../../../../Assets/img/slide1.png";
import slide2 from "../../../../Assets/img/slide2.png";
import slide3 from "../../../../Assets/img/slide3.png";
import slide4 from "../../../../Assets/img/slide4.png";

const Destination = () => {
  return (
    <>
      <div id="container">
        <div className={s.card_content}>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
            }}
          >
            Popular Destinations
          </motion.h1>
          <div className={s.cards}>
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
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={slide1} />}
              >
                <Meta
                  title="Venice"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
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
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={slide2} />}
              >
                <Meta
                  title="Venice"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -150 },
              }}
            >
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={slide3} />}
              >
                <Meta
                  title="Venice"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -150 },
              }}
            >
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={slide4} />}
              >
                <Meta
                  title="Venice"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
            }}
            className={s.search}
          >
            <Search
              placeholder="Введите код билета"
              enterButton="Искать"
              size="large"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Destination;
