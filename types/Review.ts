export interface Review {
  name: string;
  image: string;
  score: number;
  review: string;
}

export interface ReviewForm extends Review {
  _id: string;
}
