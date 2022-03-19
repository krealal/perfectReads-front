import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("given a userReducer", () => {
  describe("when it gets a current user ", () => {
    test("then shoud return a new user", () => {
      const currentToken = {};
      const user = {
        user: "kevin",
      };

      const action = {
        type: actionTypes.login,
        user,
      };

      const expectedNewToken = userReducer(currentToken, action);
      expect(expectedNewToken).toEqual(user);
    });
  });

  describe("When it gets an empty reducer", () => {
    test("Then it should compare with action and trigger default case", () => {
      const newReview = userReducer([], {});
      expect(newReview).toEqual({});
    });
  });
});
