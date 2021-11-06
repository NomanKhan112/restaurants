import React, { useState } from "react";
import "antd/dist/antd.css";
import Styles from "./style.js";
import "./Home.css";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Shefworks from "../../components/Shefworks/index.js";
import chooseImg from "../../assects/Shef Works/ChooseShef.PNG";
import delivery from "../../assects/Shef Works/delivery.PNG";
import Pick from "../../assects/Shef Works/Pick .PNG";
import Loctionsvg from "../../assects/Dishes/pin.svg";
import arrowsvg from "../../assects/Dishes/right-arrow.svg";
import shef1 from "../../assects/Shefs/1-2.jpg";
import shef2 from "../../assects/Shefs/2-2.jpg";
import shef3 from "../../assects/Shefs/3-2.jpg";
import video from "../../assects/video.jpg";
import foodseafty from "../../assects/food safty/homepage.jpg";

import profile1 from "../../assects/profiles/1.jpg";
import profile2 from "../../assects/profiles/2.png";
import profile3 from "../../assects/profiles/3.png";

import Footers from "../../components/Footer/index.js";

import {
  Layout,
  Menu,
  Row,
  Col,
  Carousel,
  Modal,
  Button,
  Form,
  Input,
} from "antd";
import { ArrowRightOutlined, BarsOutlined } from "@ant-design/icons";

import Navbar from "../../components/navbar/index.js";

const { Header, Footer, Content } = Layout;
const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const contentStyle = {
    height: "500px",
    lineHeight: "160px",
    textAlign: "center",
    backgroundColor: "black",
  };

  return (
    <>
      <Navbar />

      <Content>
        <Modal
          title="Add Shef"
          visible={isModalVisible}
          onOk={handleOk}
          okText="Add Shef"
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Shef name"
              name="shefname"
              rules={[
                { required: true, message: "Please input your shef name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Phone" name="number">
              <Input />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>

            <Form.Item label="Cuisine Type" name="cuisine">
              <Input />
            </Form.Item>

            <Form.Item label="Description">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>

        {/* **************************** Hero Section *************************8 */}
        <div className="HeaderContainer">
          <div className="container">
            <div className="contant">
              <div className="Heading">
                <h1>
                  Authentic dishes. <br /> Homemade. <br /> Delivered.
                </h1>
              </div>
              <div className="para">
                <h3>
                  Explore who's cooking in <br />
                  your neighborhood.
                </h3>
              </div>
              <div className="btn">
                <button onClick={showModal}>Save shef</button>
                <Switch>
                  <Link to="/Sheflist">
                    <button>Shef List</button>
                  </Link>
                </Switch>
              </div>
              <div className="paraSign">
                <p>
                  Already have an account?{" "}
                  <span className="paraSpan"> Sign in</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* **************************** How Shef Works *************************8 */}
        <section className="Shef-works">
          <h2>How Shef Works</h2>
          <Row className="flex">
            <Col span={6}>
              <Shefworks
                sehfWorkImg={chooseImg}
                heading={"Choose a Shef"}
                Description={"All shefs are food safety certified"}
              />
            </Col>
            <Col span={6}>
              <Shefworks
                sehfWorkImg={delivery}
                heading={"Pick your dishes"}
                Description={
                  "Order in advance so shefs can buy fresh ingredients"
                }
              />
            </Col>
            <Col span={6}>
              <Shefworks
                sehfWorkImg={Pick}
                heading={"Get your delivery"}
                Description={
                  "Dishes arrive refrigerated – just heat, eat and repeat!"
                }
              />
            </Col>
          </Row>
        </section>

        {/* **************************** Featured dishes *************************8 */}

        <section className="featured-dishes">
          <Row className="dishes">
            <Col className="dumplings-sec" span={10}>
              <h2 className="featured-dishes-heading">Featured dishes</h2>

              <div className="dumplings">
                <div className="dumplings-contant">
                  <h1 className="dumplings-heading">
                    Beef Dumplings made by Shef Judy
                  </h1>
                  <div className="dumplings-zip">
                    <p>Explore dishes in your area</p>
                    <div className="search">
                      <div className="loction-logo">
                        <img src={Loctionsvg} width="30px" />
                      </div>
                      <input className="zip-input" placeholder="Enter ZIP" />
                      <button className="zip-btn">
                        <img src={arrowsvg} width="15px" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="dumplings-btn">See dishes in your area</button>
            </Col>
            <Col className="chicken-sec" span={13}>
              <div className="dumplings chicken">
                <div className="dumplings-contant">
                  <h1 className="dumplings-heading">
                    Chicken Pho made by Shef Ly
                  </h1>
                  <div className="dumplings-zip">
                    <p>Explore dishes in your area</p>
                    <div className="search">
                      <div className="loction-logo">
                        <img src={Loctionsvg} width="30px" />
                      </div>
                      <input className="zip-input" placeholder="Enter ZIP" />
                      <button className="zip-btn">
                        <img alt="" src={arrowsvg} width="15px" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                }}
              >
                <Col span={14}>
                  <div className="dumplings paneer">
                    <div className="dumplings-contant">
                      <h1 className="dumplings-heading">
                        Chicken Pho made by Shef Ly
                      </h1>
                      <div className="dumplings-zip">
                        <p>Explore dishes in your area</p>
                        <div className="search">
                          <div className="loction-logo">
                            <img src={Loctionsvg} width="30px" />
                          </div>
                          <input
                            className="zip-input"
                            placeholder="Enter ZIP"
                          />
                          <button className="zip-btn">
                            <img src={arrowsvg} width="15px" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="paneer-details" span={9}>
                  <p>Top</p>
                  <h2>Chicken Pho</h2>
                  <h3>Shef Ly</h3>
                  <p>Left</p>
                  <h2>Shahi Paneer</h2>
                  <h3>Shef Supriya</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* **************************** Meet The Shefs *************************8 */}
        <section className="shefs">
          <Row style={{ height: "100%" }}>
            <Col span={21}>
              <Carousel
                effect="fade"
                dotPosition="right"
                className="achaa"
                autoplay
              >
                <Row className="carousel-contant">
                  <Col className="shef-dish-1" span={12}></Col>
                  <Col className="meet-shef" span={9}>
                    <h2>Meet the shefs</h2>
                    <img src={shef1} />
                    <p className="shef-name">Mojgan B.</p>
                    <p className="shef-from">Middle East</p>
                    <p className="shef-Description">
                      I was born and raised in Tehran, Iran, where I began
                      learning traditional recipes from my grandmother. I'm
                      honored to share our family recipes at your kitchen table,
                      and I hope they'll fill you with a feeling of home.
                    </p>
                    <button className="dumplings-btn shefs-btn">
                      See Shefs in your area
                    </button>
                  </Col>
                </Row>
                <Row className="carousel-contant">
                  <Col className="shef-dish-2" span={12}></Col>
                  <Col className="meet-shef" span={9}>
                    <h2>Meet the shefs</h2>
                    <img src={shef2} />
                    <p className="shef-name">Julie Y.</p>
                    <p className="shef-from">Southern China</p>
                    <p className="shef-Description">
                      I learned to cook from my mother in our village in
                      Southern China. When we immigrated to the US, we brought
                      along the flavors of our hometown. With Shef, I can now
                      share those flavors with my entire community.
                    </p>
                    <button className="dumplings-btn shefs-btn">
                      See Shefs in your area
                    </button>
                  </Col>
                </Row>
                <Row className="carousel-contant">
                  <Col className="shef-dish-3" span={12}></Col>
                  <Col className="meet-shef" span={9}>
                    <h2>Meet the shefs</h2>
                    <img src={shef3} />
                    <p className="shef-name">Jaganya J.</p>
                    <p className="shef-from">South India</p>
                    <p className="shef-Description">
                      Ever since leaving India, cooking is how I stay connected
                      to my roots. Shef has given me a sense of purpose and
                      pride. Now I get to cook for my community and make a
                      substantial income that I can rely on.
                    </p>
                    <button className="dumplings-btn shefs-btn">
                      See Shefs in your area
                    </button>
                  </Col>
                </Row>
              </Carousel>
            </Col>
          </Row>
        </section>

        {/* **************************** Shefs Analatycis *************************8 */}

        <section className="shef-analatics">
          <Row className="shef-analatics-row">
            <Col span={4} className="shef-analatics-col">
              <h1>1M+</h1>
              <p>Over 1,000,000 authentic homemade dishes served</p>
            </Col>
            <Col span={4} className="shef-analatics-col">
              <h1>4.8/5</h1>
              <p>Average shef rating from thousands of happy customers</p>
            </Col>
            <Col span={4} className="shef-analatics-col">
              <h1>100%</h1>
              <p>All shefs are food safety certified</p>
            </Col>
          </Row>
        </section>

        {/* **************************** Testimonials *************************8 */}

        <section className="testimonials">
          <Row className="testimonials-row">
            <Col span={8} className="testimonials-col">
              <h2 className="testimonials-heading">Testimonials</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "400px",
                }}
              >
                <p>
                  I just ate this a few minutes ago and it changed my life. It's
                  as good as going to your Pakistani aunty's house for dinner.
                </p>
                <div className="testimonials-profile">
                  <img src={profile1} width="80px" height="80px" />
                  <p>CYNTHIA C.</p>
                </div>
              </div>
            </Col>
            <Col span={8} className="testimonials-col">
              <h2 className="testimonials-heading none">Testimonials</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "400px",
                }}
              >
                <p style={{ marginBottom: "128px" }}>
                  Super traditional dumplings that remind me of my grandma's.
                </p>
                <div className="testimonials-profile">
                  <img src={profile2} width="80px" height="80px" />
                  <p>ALLIE E.</p>
                </div>
              </div>
            </Col>
            <Col span={8} className="testimonials-col">
              <h2 className="testimonials-heading none">Testimonials</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "400px",
                }}
              >
                <p>
                  I am really picky about my food and any purchase. I am 200%
                  satisfied with Shef. Food was awesome. Quantity was really
                  good.
                </p>
                <div className="testimonials-profile">
                  <img src={profile3} width="80px" height="80px" />
                  <p>SWATI B.</p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        {/* **************************** Try Shefs *************************8 */}
        <div className="tryShefContainer">
          <div className="title">
            <h2>Why try Shef?</h2>
          </div>

          <div className="cardDiv">
            <div className="card">
              <h3>Support local cooks</h3>
              <p>
                Unlike restaurants, you know exactly who is preparing your food
              </p>
            </div>
            <div className="card">
              <h3>Explore new cultures</h3>
              <p>
                Reconnect with your heritage or discover new cultures through
                traditional homemade dishes
              </p>
            </div>
            <div className="card">
              <h3>Starting at $7</h3>
              <p>
                Enjoy real homemade food at a reasonable price, without
                sacrificing time
              </p>
            </div>
          </div>

          <div className="btnMeals">
            <button>Explore meals</button>
          </div>
        </div>

        {/* **************************** Meet the shefs *************************8 */}

        <section className="meet-shefs">
          <Row className="meet-shefs-contant">
            <Col span={21} className="meet-shefs-col">
              <div class="meet-shef-details">
                <p>Video Spotlight</p>
                <h2>Meet the shefs</h2>
                <button>Watch Video ></button>
              </div>
              <img src={video} />
            </Col>
          </Row>
        </section>

        {/* **************************** Food Safety *************************8 */}

        <section className="meet-shefs">
          <Row className="food-safety-contant">
            <Col span={14} className="food-safety-col">
              <img src={foodseafty} width="800px" height="500px" />
            </Col>
            <Col span={8} className="meet-shefs-col food-safety-col">
              <div class="food-safety-details">
                <h2>Food safety</h2>
                <p>
                  At Shef, we are committed to helping ensure that your food
                  will always be safe to eat. All shefs are required to pass an
                  accredited food safety certification exam and comply with all
                  local laws and regulations. In regions that have not yet
                  implemented home cooking laws, shefs are required to cook out
                  of commercial kitchens or other legally permissible
                  facilities.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        {/* **************************** Food Safety *************************8 */}
        <div className="readyOderContainer">
          <div className="contant2">
            <div className="heading">
              <h2>Ready to order?</h2>
              <p>Dishes worth traveling for, made just a few streets away.</p>
              <div className="findFood">
                <img src="" />
                <input placeholder="Enter your ZIP code" />
                <button>Find Food></button>
              </div>
            </div>
          </div>
        </div>
        <div className="getStarted">
          <div className="paraShef">
            <p>
              <span className="spanP">Become a Shef.</span>Be your own boss and
              earn money on your own schedule
            </p>
          </div>
          <div class="getBtn">
            <button>Get started</button>
          </div>
        </div>
      </Content>

      {/* **************************** Footer *************************8 */}
      <Footers />
    </>
  );
};

export default Home;
