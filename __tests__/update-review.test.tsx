import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import UpdateReview from "../pages/update-review";
import store from "../redux/store";

describe("given a new-review page", () => {
  describe("when its rendered", () => {
    test("then it should find a textbox and a button in the document", () => {
      render(
        <Provider store={store}>
          <UpdateReview />
        </Provider>
      );

      const expectedInput = "textbox";
      const expectedButton = "button";

      const expectedOutput = screen.getByRole(expectedInput, {
        name: /name/i,
      });
      const expectedOutputTwo = screen.getByRole(expectedButton);

      expect(expectedOutput).toBeInTheDocument();
      expect(expectedOutputTwo).toBeInTheDocument();
    });
  });
});
