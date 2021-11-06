import React, { useState } from "react";
import "antd/dist/antd.css";
// import Styles from "./style.js";
import "./ShefWorks.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Layout, Menu, Row, Col } from "antd";
import { ArrowRightOutlined, BarsOutlined } from "@ant-design/icons";

const Shefworks = (props) => {
  return (
    <>
      <div className="shef-work-card">
        <img src={props.sehfWorkImg} />
        <h1>{props.heading}</h1>
        <p>{props.Description}</p>
      </div>
    </>
  );
};

export default Shefworks;
