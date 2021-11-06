import React, { useState } from "react";
import "./shefcard.css";
import {} from "antd";

import startIcon from "../../assects/Shef Card/star.svg";

const ShefCard = (props) => {
  return (
    <>
      <div className="ShefCardContainer">
        <div className="MainCard">
          <div className="cardHead">
            <img src={props.foodimg} alt="" height="200px" />
            <div className="cardFooter2">
              <img src={props.userimg} alt="" />
            </div>
          </div>
          <div className="cardBody">
            <div className="cardFooter">
              <h3>{props.shafName}</h3>
              <p>{props.shafLocation}</p>
              <p>{props.shafPhone}</p>
              <p className="CookMaster">{props.cuisineType}</p>
              <p>{props.shefDescription}</p>

              <div className="stars">
                <p>(4.8)s</p>
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <img src={startIcon} alt="" />
                <p>(1133)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShefCard;
