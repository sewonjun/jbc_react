import { combineReducers } from "redux";
import goodsReducer from "./goodsCounter.jsx";
import stockReducer from "./stockCounter.jsx";

const rootReducer = combineReducers({
  goodsReducer,
  stockReducer,
});

export default rootReducer;
