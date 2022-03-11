import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives an action", () => {
    test("Then it should been called", () => {
      const action = jest.fn();
      const image = "src/1.png";

      render(<Button actionOnClick={action} image={image} />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
