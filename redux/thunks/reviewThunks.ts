import { Dispatch } from "redux";
import { getReviewAction } from "../actions/actionCreator";

const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/all`;

export const loadReviewThunk = async (dispatch: Dispatch) => {
  const response = await fetch(url);
  const reviewList: any = await response.json();
  console.log(reviewList);

  return dispatch(getReviewAction(reviewList));
};
