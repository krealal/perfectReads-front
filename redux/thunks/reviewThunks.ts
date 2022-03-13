import { Dispatch } from "redux";
import Review from "../../types/Review";
import {
  createReviewAction,
  deleteReviewAction,
  getReviewAction,
} from "../actions/actionCreator";

const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}`;

export const loadReviewThunk = async (dispatch: Dispatch) => {
  const response = await fetch(`${url}/reviews/all`);
  const reviewList: any = await response.json();

  return dispatch(getReviewAction(reviewList));
};

export const deleteReviewThunk =
  (_id: string) => async (dispatch: Dispatch) => {
    const response = await fetch(`${url}/reviews/${_id}`, {
      method: "DELETE",
    });
    if (!response.ok) return;
    dispatch(deleteReviewAction(_id));
  };

export const createReviewThunk =
  (review: Review) => async (dispatch: Dispatch) => {
    const response = await fetch(`${url}/reviews/new-post`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    console.log("buenas fetch");

    if (!response.ok) return;
    const newReview = await response.json();
    dispatch(createReviewAction(newReview));
  };
