import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("given a loginForm component", () => {
  describe("when its rendered", () => {
    test("then it should be find the heading 'log in'", () => {
      const submit = jest.fn();
      render(
        <LoginForm changeData={submit} formData={submit} submit={submit} />
      );

      const tittle = screen.getByRole("heading", { name: /log in/i });

      expect(tittle).toBeInTheDocument();
    });
  });
});
