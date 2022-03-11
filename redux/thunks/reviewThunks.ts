import { Dispatch } from "redux";
import { deleteReviewAction, getReviewAction } from "../actions/actionCreator";

const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}`;

export const loadReviewThunk = async (dispatch: Dispatch) => {
  const response = await fetch(`${url}/reviews/all`);
  const reviewList: any = await response.json();

  return dispatch(getReviewAction(reviewList));
};

export const deleteReviewThunk = (id: string) => async (dispatch: Dispatch) => {
  const response = await fetch(`${url}/reviews/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) return;
  dispatch(deleteReviewAction(id));
};
