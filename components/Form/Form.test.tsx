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
    test("then it should be find input name and type 'hola buenos dias'", async () => {
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

      userEvent.click(button);

      expect(submit).toHaveBeenCalled();
    });
  });

  describe("when its rendered and finds radioInput with accessible name '2 Stars", () => {
    test("then when user clicks on it should dispatch function 'clicked' in getScore", async () => {
      const submit = jest.fn();
      const clicked = jest.fn();
      render(
        <Form
          buttonText="add"
          tittle="new review"
          submit={submit}
          changeData={submit}
          formData={submit}
          getScore={clicked}
        />
      );

      const starButton = screen.getByRole("radio", { name: /2 stars/i });
      await userEvent.click(starButton);

      expect(clicked).toHaveBeenCalled();
    });
  });
});
