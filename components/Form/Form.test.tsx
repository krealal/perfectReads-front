import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Form from "./Form";

describe("given a registerForm component", () => {
  describe("when its rendered", () => {
    test("then it should be find the heading 'new review'", () => {
      const submit = jest.fn();
      render(
        <Form
          buttonText="add"
          tittle="new review"
          submit={submit}
          changeData={submit}
          formData={submit}
          getScore={submit}
        />
      );

      const tittle = screen.getByRole("heading", { name: /new review/i });

      expect(tittle).toBeInTheDocument();
    });
  });

  describe("when its rendered", () => {
    test("then it should be find the heading 'new review'", () => {
      const inputedText = "hola buenos días";
      const submit = jest.fn();
      render(
        <Form
          buttonText="add"
          tittle="new review"
          submit={submit}
          changeData={submit}
          formData={submit}
          getScore={submit}
        />
      );

      const input = screen.getByRole("textbox", { name: /name/i });
      userEvent.type(input, inputedText);
    });
  });

  describe("when its rendered and finds button with accesible name 'add' and its clicked", () => {
    test("then the button should be called", () => {
      const submit = jest.fn();
      render(
        <Form
          buttonText="add"
          tittle="new review"
          submit={submit}
          changeData={submit}
          formData={submit}
          getScore={submit}
        />
      );

      const button = screen.getByRole("button", { name: /add/i });

      fireEvent.click(button);

      expect(submit).toHaveBeenCalled();
    });
  });
});
