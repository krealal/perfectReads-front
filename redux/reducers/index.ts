import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  reviewsList: reviewReducer,
  user: userReducer,
});

export default rootReducer;
