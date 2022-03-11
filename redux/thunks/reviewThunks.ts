import { Dispatch } from "redux";
import { deleteReviewAction, getReviewAction } from "../actions/actionCreator";

const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/all`;

export const loadReviewThunk = async (dispatch: Dispatch) => {
  const response = await fetch(url);
  const reviewList: any = await response.json();

  return dispatch(getReviewAction(reviewList));
};

export const deleteReviewThunk = (id: string) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `$${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/${id}`,
    {
      method: "delete",
    }
  );
  if (!response.ok) return;
  dispatch(deleteReviewAction(id));
};
