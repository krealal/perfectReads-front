import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer";

const rootReducer = combineReducers({
  reviewsList: reviewReducer,
});

export default rootReducer;
