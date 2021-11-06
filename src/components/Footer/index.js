import React, { useState } from "react";
import "./footer.css";
import {} from "antd";
import Card1 from "../../assects/footer/american-express (1).svg";
import Card2 from "../../assects/footer/commerce (1).svg";
import Card3 from "../../assects/footer/credit-card (1).svg";
import Card4 from "../../assects/footer/credit-card (2).svg";
import Card5 from "../../assects/footer/paypal.svg";
import Card6 from "../../assects/footer/symbols.svg";
import "antd/dist/antd.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerContant">
          <div className="ShefTitle">
            <h2>Shef</h2>
            <h4>Authentic dishes. Homemade. Delivered.</h4>
          </div>
          <div className="LearnLink">
            <h3 className="footerHead">Learn</h3>
            <li>
              <a>Gift Cards</a>
            </li>
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>COVID-19 Safety</a>
            </li>
          </div>
          <div className="LearnLink">
            <h3 className="footerHead">Follow</h3>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
          </div>
          <div className="LearnLink">
            <h3 className="footerHead" height="100px">
              Join
            </h3>
            <li>
              <a>Become a Shef</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </div>
          <div className="SecurePayment">
            <h3 className="footerHead">Secure Payment</h3>
            <div>
              <img src={Card1} />
              <img src={Card2} />
              <img src={Card3} />
            </div>
            <div>
              <img src={Card4} />
              <img src={Card5} />
              <img src={Card6} />
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottem">
        <div className="ftrContant">
          <div>
            <h3>© Shef, Inc. 2020. All Rights Reserved.</h3>
          </div>
          <div>
            <h3>Privacy Policy</h3>
          </div>
          <div>
            <h3>Terms of Service</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
