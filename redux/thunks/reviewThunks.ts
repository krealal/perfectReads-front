import { Dispatch } from "redux";
import { Reviews } from "../../types/reviewsProps";
import { getReviewAction } from "../actions/actionCreator";

export const loadReviewThunk = async (dispatch: Dispatch) => {
  const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/all`;
  const response = await fetch(url, {
    method: "GET",
  });
  const reviewList: Reviews = await response.json();

  dispatch(getReviewAction(reviewList));
};
