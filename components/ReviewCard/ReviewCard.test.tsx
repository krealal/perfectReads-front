import { screen } from "@testing-library/react";
import ReviewCard from "./ReviewCard";
import { renderWithProviders } from "../../jest.setup";
import userEvent from "@testing-library/user-event";
import Router from "next/router";

jest.mock("next/router");

beforeAll(() => {
  jest.useFakeTimers();
});

describe("Given a reviewCard component", () => {
  describe("When its rendered with name /marc stars/", () => {
    test("then it should find image with alter name /marc stars/ in the document", () => {
      const review = {
        image: "/img/fav-blank.png",
        name: "marc stars",
        review: "lorem ipsum",
        id: "2",
        score: 4,
      };

      renderWithProviders(
        <ReviewCard
          id={review.id}
          image={review.image}
          name={review.name}
          review={review.review}
          score={review.score}
        />
      );

      const renderImage = screen.getByRole("img", { name: review.name });

      expect(renderImage).toBeInTheDocument();
    });

    test("then it should find a score role in the document", () => {
      const review = {
        image: "/img/fav-blank.png",
        name: "marc stars",
        review: "lorem ipsum",
        id: "2",
      };

      renderWithProviders(
        <ReviewCard
          image={review.image}
          name={review.name}
          review={review.image}
          key={1}
          id={review.id}
          score={4}
        />
      );

      const scoreStars = screen.getByRole("img", { name: /4 stars/i });

      expect(scoreStars).toBeInTheDocument();
    });
  });

  describe("when the user clicks on delete button", () => {
    test("then should be show a toastr with role alert", async () => {
      jest.advanceTimersByTime(1000);
      const mockLocalStorage = {
        getItem: () =>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
      };
      Object.defineProperty(window, "localStorage", {
        value: mockLocalStorage,
      });

      const review = {
        image: "/img/fav-blank.png",
        name: "marc stars",
        review: "lorem ipsum",
        id: "123",
      };

      renderWithProviders(
        <ReviewCard
          image={review.image}
          name={review.name}
          review={review.image}
          key={1}
          id={review.id}
          score={4}
        />
      );

      const deleteButton = screen.getAllByRole("button", {
        name: /delete/i,
      });

      userEvent.click(deleteButton[0]);

      const toast = await screen.findByRole("alert");
      expect(toast).toBeInTheDocument();
    });
  });

  describe("When the user clicks on edit page", () => {
    test("then it should call next/Router with method push", () => {
      const mockLocalStorage = {
        getItem: () =>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
      };
      Object.defineProperty(window, "localStorage", {
        value: mockLocalStorage,
      });
      const review = {
        image: "/img/fav-blank.png",
        name: "marc stars",
        review: "lorem ipsum",
        id: "123",
      };

      const spyRouter = jest.spyOn(Router, "push");

      renderWithProviders(
        <ReviewCard
          image={review.image}
          name={review.name}
          review={review.image}
          key={1}
          id={review.id}
          score={4}
        />
      );

      const editButton = screen.getAllByRole("button", {
        name: /edit/i,
      });

      userEvent.click(editButton[0]);

      expect(spyRouter).toHaveBeenCalled();
    });
  });
});
