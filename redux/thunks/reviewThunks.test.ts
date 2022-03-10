import "whatwg-fetch";
import { loadReviewThunk } from "./reviewThunks";
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
