import React from "react";
import { createStore } from "redux";
import allReducers from "../Reducers/reducers.js";

export default createStore(allReducers);
