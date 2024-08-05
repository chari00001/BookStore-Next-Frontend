// store/rootReducer.js
import { combineReducers } from "redux";
import exampleReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
