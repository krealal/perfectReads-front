import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("given a loginForm component", () => {
  describe("when its rendered", () => {
    test("then it should be find the heading 'log in'", () => {
      const submit = jest.fn();
      render(
        <RegisterForm
          changeImage={submit}
          changeData={submit}
          formData={submit}
          submit={submit}
        />
      );

      const tittle = screen.getByRole("heading", { name: /register/i });

      expect(tittle).toBeInTheDocument();
    });
  });
});
