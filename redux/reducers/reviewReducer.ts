import { AnyAction } from "redux";
import Review from "../../types/Review";
import actionTypes from "../actions/actionTypes";

const reviewReducer = (reviewState: Review[] = [], action: AnyAction | {}) => {
  let newReview;
  switch ((action as AnyAction).type) {
    case actionTypes.getReviews:
      newReview = [...(action as AnyAction).payload];
      break;
    default:
      newReview = [...reviewState];
  }
  return newReview;
};

export default reviewReducer;
