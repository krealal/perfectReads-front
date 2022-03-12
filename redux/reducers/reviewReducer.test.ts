import { deleteReviewAction, getReviewAction } from "../actions/actionCreator";
import reviewReducer from "./reviewReducer";

describe("given a reviewReducer", () => {
  describe("when it gets a current review ", () => {
    test("then shoud return a new review", () => {
      const currentReview = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "3",
        },
      ];
      const newReview = [
        {
          name: "ewe",
          image: "src/img/2.png",
          score: 1,
          review: "lorem2",
          _id: "4",
        },
      ];

      const action = getReviewAction(newReview);
      const recievedList = reviewReducer(currentReview, action);

      expect(recievedList).toEqual(newReview);
    });
  });

  describe("When it gets an empty reducer", () => {
    test("Then it should compare with action and trigger default case", () => {
      const newReview = reviewReducer([], {});
      expect(newReview).toEqual([]);
    });
  });

  describe("When it gets 2 reviews and use deleteReviewAction with id 2", () => {
    test("Then it should delete it and not to fain in reviews", () => {
      const reviews = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "2",
        },
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "3",
        },
      ];
      const idToDelete = "2";
      const expectedLength = 1;
      const expectedRemovedReview = { id: "2" };
      const action = deleteReviewAction(idToDelete);

      const newReviews = reviewReducer(reviews, action);

      expect(newReviews).not.toContain(expectedRemovedReview);
      expect(newReviews).toHaveLength(expectedLength);
    });
  });
});
