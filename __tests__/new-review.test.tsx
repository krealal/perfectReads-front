import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import NewReview from "../pages/new-review";
import store from "../redux/store";

describe("given a new-review page", () => {
  describe("when its rendered", () => {
    test("then it should find a textbox and a button in the document", () => {
      render(
        <Provider store={store}>
          <NewReview />
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

  describe("When its renderend an typed in textbox 'hola buenos dias'", () => {
    test("then it should find the input with 'hola buenos dias' inside", async () => {
      const inputedText = "hola buenos dias";
      render(
        <Provider store={store}>
          <NewReview />
        </Provider>
      );

      const input = screen.getByRole("textbox", {
        name: /name/i,
      });

      await userEvent.type(input, inputedText);

      expect(input).toHaveValue(inputedText);
    });
  });

  describe("When its rendered and finds the button 'add review' ", () => {
    test("then it should be called", async () => {
      const form = jest.fn();

      render(
        <Provider store={store}>
          <NewReview />
        </Provider>
      );

      const button = screen.getByRole("button", {
        name: /add review/i,
      });

      await userEvent.click(button);

      expect(form).not.toHaveBeenCalled();
    });
  });
});
