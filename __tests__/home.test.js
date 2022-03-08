import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("given a home page ", () => {
  describe("when its rendered", () => {
    test("then it should find h1 /The Way Of Kings/ in the document", () => {
      render(<Home />);
      const bookTittle = "The Way Of Kings";

      const renderTittle = screen.getByRole("heading", { name: bookTittle });

      expect(renderTittle).toBeInTheDocument();
    });
  });
});
