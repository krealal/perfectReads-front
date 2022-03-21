import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the navigation layout", () => {
  describe("When rendered", () => {
    test("It should find 3 links", () => {
      render(<Navigation />);

      const links = screen.getByRole("textbox", { name: /search book/i });

      expect(links).toBeInTheDocument();
    });
  });
});
