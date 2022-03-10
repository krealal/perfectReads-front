import { getReviewAction } from "./actionCreator";

describe("Given a getReviewAction action", () => {
  describe("When it receives an object review with name, image, score and review", () => {
    test("Then it should make loadRobotsAction and compare it with the expected action", () => {
      const review = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
        },
      ];
      const expectedAction = {
        type: "get-reviews",
        payload: review,
      };

      const action = getReviewAction(review);
      expect(action).toEqual(expectedAction);
    });
  });
});