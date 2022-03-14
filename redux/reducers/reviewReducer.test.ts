import {
  createReviewAction,
  deleteReviewAction,
  getReviewAction,
  updateReviewAction,
} from "../actions/actionCreator";
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

  describe("When it's called with an array of reviews and createReviewAction and a singleReview ", () => {
    test("Then the new array will contain the 3 reviews ", () => {
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
      const singleReview = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "5",
        },
      ];
      const action = createReviewAction(singleReview);
      const expectedLength = 3;

      const newReviews = reviewReducer(reviews, action);

      expect(newReviews).toHaveLength(expectedLength);
    });
  });

  describe("When it receibes a review with id 2", () => {
    test("Then it should foind id 2 and launch reviewAction", () => {
      const review = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "2",
        },
      ];
      const idToUpdate = "2";
      const expectedLength = 1;
      const expectedupdatedReview = { id: "2" };
      const action = updateReviewAction(idToUpdate);

      const newReviews = reviewReducer(review, action);

      expect(newReviews).not.toContain(expectedupdatedReview);
      expect(newReviews).toHaveLength(expectedLength);
    });
  });

  describe("When it's called with an array of reviews and an aciton with type update and a review with matching id modified", () => {
    test("Then it should return a new robots array with the modified robot", () => {
      const review = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "2",
        },
        {
          name: "asd",
          image: "src/img/1.png",
          score: 1,
          review: "lorem",
          _id: "4",
        },
      ];
      const newReview = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          _id: "2",
        },
      ];

      const expectedLength = 2;
      const expectedModifiedReview = {
        name: "awa",
        image: "src/img/1.png",
        score: 4,
        review: "lorem",
        _id: "2",
      };
      const action = updateReviewAction("2");

      const newReviews = reviewReducer(review, action);

      expect(newReviews).toHaveLength(expectedLength);
      expect(newReviews).not.toContain(expectedModifiedReview);
    });
  });
});
