import { createStore } from "redux";
import { combineReducers } from "redux";
import modal from "../modules/modal";
import button from "../modules/button";

const rootReducer = combineReducers({
  modal,
  button,
});
const store = createStore(rootReducer);

export default store;
