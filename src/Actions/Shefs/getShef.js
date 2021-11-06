import React from "react";

const getShef = (payload) => {
  return {
    type: "get_Shef",
    payload,
  };
};

export default getShef;
