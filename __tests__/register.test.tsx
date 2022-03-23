import { render, screen } from "@testing-library/react";

import Register from "../pages/register";
import { wrapper } from "../redux/store";

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
});
