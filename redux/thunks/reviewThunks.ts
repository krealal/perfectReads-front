import { Dispatch } from "redux";
import { Reviews } from "../../types/reviewsProps";
import { getReviewAction } from "../actions/actionCreator";

const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/all`;

export const loadReviewThunk = async (dispatch: Dispatch) => {
  const response = await fetch(url);
  console.log(response);
  const reviewList: Reviews = await response.json();

  return dispatch(getReviewAction(reviewList));
};
