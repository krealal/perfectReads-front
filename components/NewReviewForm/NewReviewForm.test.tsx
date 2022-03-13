import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import RegisterForm from "./NewReviewForm";

describe("", () => {
  describe("", () => {
    test("", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const hola = screen.getByRole("heading", { name: /new review/i });

      expect(hola).toBeInTheDocument();
    });
  });
});
