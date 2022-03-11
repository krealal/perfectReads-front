import { AnyAction } from "redux";
import Review from "../../types/Review";
import actionTypes from "../actions/actionTypes";

const reviewReducer = (reviewState: Review[] = [], action: AnyAction | {}) => {
  let newReview;
  switch ((action as AnyAction).type) {
    case actionTypes.getReviews:
      newReview = [...(action as AnyAction).payload];
      break;

    case actionTypes.deleteReview:
      newReview = (action as AnyAction).filter(
        (review: Review) => review._id !== (action as AnyAction).id
      );
      break;

    default:
      newReview = [...reviewState];
  }
  return newReview;
};

export default reviewReducer;
