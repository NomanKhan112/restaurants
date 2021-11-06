import React from "react";
import api_url from "./api_url";
import axios from "axios";

class shefInfo {
  async getShefs(props) {
    try {
      const result = await axios.get(api_url + "chef/1", {});
      return result;
    } catch (error) {
      console.log(error, "error");
    }
  }
}

export default shefInfo;
