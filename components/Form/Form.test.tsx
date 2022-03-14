import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Form from "./Form";

describe("given a registerForm component", () => {
  describe("when its rendered", () => {
    test("then it should be find the heading 'new review'", () => {
      render(
        <Provider store={store}>
          <Form buttonText="add" tittle="new review" />
        </Provider>
      );

      const hola = screen.getByRole("heading", { name: /new review/i });

      expect(hola).toBeInTheDocument();
    });
  });

  describe("when its rendered", () => {
    test("then it should be find the heading 'new review'", () => {
      const inputedText = "hola buenos días";

      render(
        <Provider store={store}>
          <Form buttonText="add" tittle="new review" />
        </Provider>
      );

      const input = screen.getByRole("textbox", { name: /name/i });
      userEvent.type(input, inputedText);
    });
  });
});
