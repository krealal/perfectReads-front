import Review from "./Review";

export type Reviews = Review[];

export interface reviewsProps {
  type: string;
  payload: Review[];
}
