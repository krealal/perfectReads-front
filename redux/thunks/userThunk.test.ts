import "whatwg-fetch";
import { server } from "../../mocks/server";
import { loginThunk, registerThunk } from "./userThunk";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({}));

describe("Given a loginThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const user = {
        username: "luis",
        password: "1234",
      };
      const login = loginThunk(user);

      await login(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a register thunk", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const user = {
        name: "iwi",
        username: "uwu",
        password: "1234",
        about: "i like turtles",
        image: "src/1.jpg",
        email: "uwu@uwu.uwu",
      };
      const login = registerThunk(user);

      await login(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
