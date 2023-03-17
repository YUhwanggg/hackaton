import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Descriptions } from "antd";
import { Tag } from "antd";

const { Paragraph } = Typography;

const Destination = () => {
  const [search, setStateSearch] = useState([]);
  const [state, setState] = useState([]);

  const searchFun = () => {
    axios
      .post("http://www.dd.php-f22.ru/api/airports", {
        code: search,
      })
      .then((res) => setState(res.data.data));
  };
  useEffect(() => {
    console.log(search);
    searchFun();
  }, [search]);

  console.log(state);
  const preventDefault = (e) => {
    e.preventDefault();
    console.log("Clicked! But prevent default.");
  };
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
                <p style={{ margin: "10px 0px" }}>код билета:</p>
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
                <p style={{ margin: "10px 0px" }}>код билета:</p>
                <Paragraph copyable>
                  AC8097 Y 15OCT 4 YVRSEA HK1 1335 1435 DH4 E 0
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
                <p style={{ margin: "10px 0px" }}>код билета:</p>
                <Paragraph copyable>
                  AS2254 F 17OCT 6 SEAPDX HK1 1700 1753 E75 E 0
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
                <p style={{ margin: "10px 0px" }}>код билета:</p>
                <Paragraph copyable>
                  AA7007 J 17OCT 6 PDXLHR HK1 1845 1210+1 788 E 0
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
              value={search}
              onChange={(e) => {
                console.log(e.target.value);
                setStateSearch(e.target.value);
              }}
            />
          </motion.div>
        </div>

        {state.length !== 0 ? (
          <motion.div
            style={{
              borderRadius: "8px 8px 8px 8px",
              padding: "20px",
              border: " 1px solid #f0f0f0",
              boxShadow: " 3px 3px 3px 3px gray",
              marginBottom: "150px",
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
            }}
          >
            <Descriptions title={state.airport_in} layout="vertical">
              <Descriptions.Item label="Company">{state.aircompany}</Descriptions.Item>
              <Descriptions.Item label="Start Time">{state.time_arrival}</Descriptions.Item>
              <Descriptions.Item label="End Time">{state.time_departure}</Descriptions.Item>
              <Descriptions.Item label="Data">{state.data}</Descriptions.Item>
              <Descriptions.Item label="Airplane">{state.plane}</Descriptions.Item>
              <Descriptions.Item label="Flight Number">{state.flight_number}</Descriptions.Item>
              <Descriptions.Item label="From">{state.airport_in}</Descriptions.Item>
              <Descriptions.Item label="To">{state.airport_out}</Descriptions.Item>
            </Descriptions>
          </motion.div>
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </>
  );
};

export default Destination;
