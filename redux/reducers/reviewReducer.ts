import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { Review, ReviewForm } from "../../types/Review";
import TypeOfAction from "../../types/TypeOfAction";

import actionTypes from "../actions/actionTypes";

const reviewReducer = (
  reviewState: Review[] | ReviewForm[] = [],
  action: TypeOfAction | {}
) => {
  let newReview;
  switch ((action as AnyAction).type) {
    case HYDRATE:
      return [...(action as AnyAction).payload.reviewsList];

    case actionTypes.getReviews:
      newReview = [...(action as AnyAction).payload];
      break;

    case actionTypes.deleteReview:
      newReview = (reviewState as ReviewForm[]).filter(
        (review) => review.id !== (action as TypeOfAction).payload
      );
      break;

    case actionTypes.createReview:
      newReview = [...reviewState, (action as AnyAction).payload];
      break;

    case actionTypes.editReview:
      newReview = (reviewState as ReviewForm[]).map((review) =>
        review.id === (action as AnyAction).id
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
