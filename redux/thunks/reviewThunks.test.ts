import "whatwg-fetch";
import {
  createReviewThunk,
  deleteReviewThunk,
  loadReviewThunk,
} from "./reviewThunks";
import { server } from "../../mocks/server";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe("Given a loadReviewThunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadReviewThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteReviewThunk function", () => {
  describe("When it is called with id 123", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const id = "123";

      const deleteThunk = deleteReviewThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it is called with id 12", () => {
    test("Then it shouldn't dispatch a function", async () => {
      const dispatch = jest.fn();
      const id = "12";

      const deleteThunk = deleteReviewThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a createReviewThunk", () => {
  describe("When its invoked with a singleReview", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      const singleReview = {
        name: "marta",
        image: "src/image/2.png",
        score: 1,
        review: "merol",
        _id: "1233124",
      };
      const createReview = createReviewThunk(singleReview);

      await createReview(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
