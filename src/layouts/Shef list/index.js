import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Sheflist from "../../components/ShefCard/index.js";
import Footers from "../../components/Footer/index.js";

import { Layout } from "antd";
import { ArrowRightOutlined, BarsOutlined } from "@ant-design/icons";

import shefFood1 from "../../assects/Shef Card/istockphoto-1301482898-170667a.jpg";
import shefFood2 from "../../assects/Shef Card/Do_o_Kalai_Recipe_-_Meghalaya_Style_Chicken_with_Black_Dal-1.jpg";
import shefFood3 from "../../assects/Shef Card/dal.jpg";
import user1 from "../../assects/Shef Card/1.jpg";
import user2 from "../../assects/Shef Card/2.png";
import user3 from "../../assects/Shef Card/3.png";

import Navbar from "../../components/navbar/index.js";
import GetShef from "../../Actions/Shefs/getShef.js";
import { connect } from "react-redux";
import shefInfo from "../../Apis/ShefInfo.js";

const shefinfo = new shefInfo();

const shefData = [
  {
    name: "fayaz",
    location: "pakistan",
    phone: "191919191919",
    cuisine: "achaa",
  },
  {
    name: "fayaz",
    location: "pakistan",
    phone: "191919191919",
    cuisine: "achaa",
  },
];

const { Header, Footer, Content } = Layout;
const List = (props) => {
  useEffect(() => {
    shefinfo
      .getShefs()
      .then((response) => {
        console.log(response, "response");
        // setOrders(response.data.order);
        // if ((response.data.order = null)) {
        //   setLoading(false);
        // }
        // if (response.status == 200) {
        //   setLoading(true);
        //   console.log(getOrders, "getOrders");
        //   props.Getorder(response.data.order);
        // } else {
        //   props.Getorder([]);
        //   setLoading(true);
        // }
      })
      .catch((error) => {
        // setLoading(true);
        // setMessage("ERR_INTERNET_DISCONNECTED");
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Content
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {shefData.map((Shef) => {
          <Sheflist
            foodimg={shefFood1}
            userimg={user1}
            shafName={Shef.name}
            shafLocation={Shef.location}
            shafPhone={Shef.phone}
            cuisineType={Shef.cuisine}
          />;
        })}
      </Content>

      {/* **************************** Footer *************************8 */}
      <Footers />
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state, "data value");

  return {
    getOrderDatas: state.allReducers,
  };
};

export default connect(mapStateToProps, {
  GetShef,
})(List);
// export default List;
