import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  reviewsList: reviewReducer,
  userToken: userReducer,
});

export default rootReducer;
