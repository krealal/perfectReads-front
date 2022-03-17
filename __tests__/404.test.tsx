import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Custom404 from "../pages/404";
import { wrapper } from "../redux/store";

describe("given a home page ", () => {
  describe("when its rendered", () => {
    test("then it should find h1 /The Way Of Kings/ in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(Custom404);
      render(<WrappedComponent />);
      const notFound = "404";

      const renderTittle = await screen.getByRole("heading", {
        name: notFound,
      });

      expect(renderTittle).toBeInTheDocument();
    });
  });
});
