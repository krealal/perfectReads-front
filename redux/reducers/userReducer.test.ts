import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("given a userReducer", () => {
  describe("when it gets a current user ", () => {
    test("then shoud return a new user", () => {
      const currentToken = {};
      const user = {
        username: "kevin",
        password: "1234",
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
      const newUser = userReducer([], {});
      expect(newUser).toEqual({});
    });
  });

  describe("When it gets an user and a reguster user action", () => {
    test("Then it should add the new user using userReducer register", () => {
      const user = {};
      const expectedUser = {
        name: "iwi",
        username: "uwu",
        password: "1234",
        about: "i like turtles",
        image: "src/1.jpg",
        email: "uwu@uwu.uwu",
      };
      const action = {
        type: "register-user",
        user: expectedUser,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });
});
