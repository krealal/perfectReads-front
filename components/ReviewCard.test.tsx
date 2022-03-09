import { render, screen } from "@testing-library/react";
import ReviewCard from "./ReviewCard";

describe("Given a reviewCard component", () => {
  describe("When its rendered with name /marc stars/", () => {
    test("then it should find image with alter name /marc stars/ in the document", () => {
      const review = {
        image: "/img/fav-blank.png",
        name: "marc stars",
        review: "lorem ipsum",
      };

      render(
        <ReviewCard
          image={review.image}
          name={review.name}
          review={review.image}
        />
      );

      const renderImage = screen.getByRole("img", { name: review.name });

      expect(renderImage).toBeInTheDocument();
    });
  });
});
