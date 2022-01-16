import counterReduser from "./counter";
import loggedReduser from "./isLogged";
import { combineReducers } from "redux";

const rootRedusers = combineReducers({
  counter: counterReduser,
  isLogged: loggedReduser,
});

export default rootRedusers;
