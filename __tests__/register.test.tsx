import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";
import Register from "../pages/register";
import { wrapper } from "../redux/store";
import TestRenderer from "react-test-renderer";

describe("given a register page", () => {
  describe("when its rendered", () => {
    test("then it should find a textbox and a button in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(Register);
      render(<WrappedComponent></WrappedComponent>);

      const expectedButton = "button";

      const expectedOutputTwo = screen.getByRole(expectedButton);

      expect(expectedOutputTwo).toBeInTheDocument();
    });
  });

  describe("when its rendered", () => {
    test("then it should find a textbox and a button in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(Register);
      render(<WrappedComponent></WrappedComponent>);

      const inputedText = "hola buenos días";

      const input = await screen.getByRole("textbox", {
        name: "Username",
      });

      const expectedButton = screen.getByRole("button");
      await fireEvent.click(expectedButton);
      await userEvent.type(input, inputedText);

      expect(input).toHaveValue(inputedText);
    });
  });
});
