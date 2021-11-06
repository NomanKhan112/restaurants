import { combineReducers } from "redux";
import shefReducers from "./shefReducers/index.js";

const allReducers = combineReducers({
  shefReducers: shefReducers,
});

export default allReducers;
