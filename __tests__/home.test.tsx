import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../pages/index";
import store from "../redux/store";

describe("given a home page ", () => {
  describe("when its rendered", () => {
    test("then it should find h1 /The Way Of Kings/ in the document", async () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      const bookTittle = "The Way Of Kings";

      const renderTittle = await screen.getByRole("heading", {
        name: bookTittle,
      });

      expect(renderTittle).toBeInTheDocument();
    });
  });
});
