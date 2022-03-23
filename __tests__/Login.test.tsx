import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import Login from "../pages/login";
import { wrapper } from "../redux/store";

describe("given a login page", () => {
  describe("when its rendered", () => {
    test("then it should find a textbox and a button in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(Login);
      render(<WrappedComponent></WrappedComponent>);

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

  describe("when its rendered and clicks on button login", () => {
    test("then it should call router and push", async () => {
      const WrappedComponent = wrapper.withRedux(Login);

      render(<WrappedComponent />);

      const button = screen.getByRole("button", { name: /login/i });
      await fireEvent.click(button);
    });
  });
});
