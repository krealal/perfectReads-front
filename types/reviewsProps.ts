import { Review, ReviewForm } from "./Review";

export type Reviews = Review[];
export type ReviewsForm = ReviewForm[];

export interface reviewsProps {
  type: string;
  payload: Review[];
}
