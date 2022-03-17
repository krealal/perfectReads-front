import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewReview from "../pages/new-review";
import { wrapper } from "../redux/store";

describe("given a new-review page", () => {
  describe("when its rendered", () => {
    test("then it should find a textbox and a button in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(NewReview);
      render(<WrappedComponent />);

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
      const WrappedComponent = await wrapper.withRedux(NewReview);
      render(<WrappedComponent />);

      const input = screen.getByRole("textbox", {
        name: /name/i,
      });

      await userEvent.type(input, inputedText);

      expect(input).toHaveValue(inputedText);
    });
  });
});
