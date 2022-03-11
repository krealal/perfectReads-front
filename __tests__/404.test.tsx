import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Custom404 from "../pages/404";
import store from "../redux/store";

describe("given a home page ", () => {
  describe("when its rendered", () => {
    test("then it should find h1 /The Way Of Kings/ in the document", async () => {
      render(
        <Provider store={store}>
          <Custom404 />
        </Provider>
      );
      const notFound = "404";

      const renderTittle = await screen.getByRole("heading", {
        name: notFound,
      });

      expect(renderTittle).toBeInTheDocument();
    });
  });
});
