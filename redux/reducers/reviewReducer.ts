import { AnyAction } from "redux";
import Review from "../../types/Review";
import TypeOfAction from "../../types/TypeOfAction";

import actionTypes from "../actions/actionTypes";

const reviewReducer = (
  reviewState: Review[] = [],
  action: TypeOfAction | {}
) => {
  let newReview;
  switch ((action as AnyAction).type) {
    case actionTypes.getReviews:
      newReview = [...(action as AnyAction).payload];
      break;

    case actionTypes.deleteReview:
      newReview = reviewState.filter(
        (review) => review._id !== (action as TypeOfAction).payload
      );
      break;

    case actionTypes.createReview:
      newReview = [...reviewState, (action as AnyAction).payload];
      break;

    case actionTypes.editReview:
      newReview = reviewState.map((review) =>
        review._id === (action as AnyAction)._id
          ? (action as AnyAction).review
          : review
      );
      break;

    default:
      newReview = [...reviewState];
  }
  return newReview;
};

export default reviewReducer;
