import { createStore } from "redux";
import { combineReducers } from "redux";
import input from "../modules/input";

const rootReducer = combineReducers({
  input,
});
const store = createStore(rootReducer);

export default store;
