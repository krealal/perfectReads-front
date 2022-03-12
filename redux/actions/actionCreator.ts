import actionTypes from "./actionTypes";
import { Reviews } from "../../types/reviewsProps";
import TypeOfAction from "../../types/TypeOfAction";

export const getReviewAction = (review: Reviews): TypeOfAction => ({
  type: actionTypes.getReviews,
  payload: review,
});

export const deleteReviewAction = (_id: string): TypeOfAction => ({
  type: actionTypes.deleteReview,
  payload: _id,
});
