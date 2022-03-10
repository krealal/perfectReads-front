import { AnyAction } from "redux";
import Review from "../../types/Review";
import actionTypes from "../actions/actionTypes";

const reviewReducer = (reviewState: Review[] = [], action: AnyAction) => {
  let newReview;
  switch (action.type) {
    case actionTypes.getReviews:
      newReview = [...action.payload];

      break;
    default:
      newReview = [...reviewState];
  }
  return newReview;
};

export default reviewReducer;
