import { createStore } from "redux";
import { combineReducers } from "redux";
import modal from "../modules/modal";
import input from "../modules/input";

const rootReducer = combineReducers({
  input,
  modal,
});
const store = createStore(rootReducer);

export default store;
