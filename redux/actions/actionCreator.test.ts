import {
  createReviewAction,
  deleteReviewAction,
  getReviewAction,
  loginAction,
  registerAction,
  updateReviewAction,
} from "./actionCreator";

describe("Given a getReviewAction action", () => {
  describe("When it receives an object review with name, image, score and review", () => {
    test("Then it should make getReviewAction and compare it with the expected action", () => {
      const review = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          id: "2",
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

describe("Given a deleteReviewAction action", () => {
  describe("When it receives an id 2", () => {
    test("Then it should make deleteReviewAction and compare it with the expected action", () => {
      const review = "2";

      const expectedAction = {
        type: "delete-review",
        payload: review,
      };

      const action = deleteReviewAction(review);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createReviewAction action", () => {
  describe("When it receives an object review with name, image, score and review", () => {
    test("Then it should make createReviewAction and compare it with the expected action", () => {
      const review = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          id: "2",
        },
      ];

      const expectedAction = {
        type: "create-review",
        payload: review,
      };

      const action = createReviewAction(review);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a updateReviewAction action", () => {
  describe("When it receives an id 2", () => {
    test("Then it should make updateReviewAction and compare it with the expected action", () => {
      const review = [
        {
          name: "uwu",
          image: "src/img/1.png",
          score: 4,
          review: "lorem",
          id: "2",
        },
      ];

      const expectedAction = {
        type: "edit-review",
        payload: review,
      };

      const action = updateReviewAction(review);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loginAction action", () => {
  describe("When it receibes user luis", () => {
    test("Then it should make loginAction and compare it with the expected action ", () => {
      const user = {
        username: "uwu",
        password: "1234",
      };

      const expectedAction = {
        type: "sign-in",
        payload: user,
      };

      const action = loginAction(user);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a registerAction action", () => {
  describe("When ", () => {
    test("Then", () => {
      const user = {
        username: "uwu",
        password: "1234",
        name: "uwu",
        about: "i like turtles",
        email: "uwu@uwu.usu",
        image: "src/1.jpg",
      };

      const expectedAction = {
        type: "register-user",
        payload: user,
      };

      const action = registerAction(user);
      expect(action).toEqual(expectedAction);
    });
  });
});
