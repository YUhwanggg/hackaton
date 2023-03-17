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
import { Typography } from "antd";

const { Paragraph } = Typography;

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
                <h4>Лондон (Гатвик) — Ванкувер</h4>
                <p style={{margin: '10px 0px'}}>код билета:</p>
                <Paragraph copyable>
                  TS 275 J 15OCT 4 LGWYVR HK1 1010 1200 332 E 0
                </Paragraph>
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
               
                <h4>"Ванкувер — Сиэтл (Такома)</h4>
                <p style={{margin: '10px 0px'}}>код билета:</p>
                <Paragraph copyable>
                AC8097 Y 15OCT 4 YVRSEA HK1         1335 1435   DH4 E 0
                </Paragraph>
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
                
                <h4>Сиэтл (Такома) — Портленд</h4>
                <p style={{margin: '10px 0px'}}>код билета:</p>
                <Paragraph copyable>
                AS2254 F 17OCT 6 SEAPDX HK1         1700 1753   E75 E 0
                </Paragraph>
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
               
                <h4> Портленд — Лондон (Хитроу)</h4>
                <p style={{margin: '10px 0px'}}>код билета:</p>
                <Paragraph copyable>
                AA7007 J 17OCT 6 PDXLHR HK1         1845 1210+1 788 E 0
                </Paragraph>
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
