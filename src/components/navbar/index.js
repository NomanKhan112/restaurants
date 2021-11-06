import React, { useState } from "react";
import "./navbar.css";
import {} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import IconCart from "../../assects/navbar/Cart.png";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="NavContainer">
        <div className="container">
          <div className="logo">
            <Switch>
              <Link to="/">
                <h3>Shef</h3>
              </Link>
            </Switch>
          </div>

          <div className="navbarItems">
            <div className="items">
              {" "}
              <a>Become a Shef</a>
            </div>
            <div className="items">
              <button>Log in</button>
            </div>
            <div className="items">
              {" "}
              <img src={IconCart} className="Nav-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
