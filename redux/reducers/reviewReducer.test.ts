import { getReviewAction } from "../actions/actionCreator";
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
        },
      ];
      const newReview = [
        {
          name: "ewe",
          image: "src/img/2.png",
          score: 1,
          review: "lorem2",
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
});
