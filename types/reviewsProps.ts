import { Review, ReviewForm } from "./Review";

export type Reviews = Review[];
export type ReviewsForm = ReviewForm[];

export interface ReviewsProps {
  type: string;
  payload: Review[];
}
