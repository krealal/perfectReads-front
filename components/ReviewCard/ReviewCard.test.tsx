import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { wrapper } from "../../redux/store";
import ReviewCard from "./ReviewCard";
import { renderWithProviders } from "../../jest.setup";

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
});
