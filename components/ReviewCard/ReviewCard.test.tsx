import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ReviewCard from "./ReviewCard";

describe("Given a reviewCard component", () => {
  describe("When its rendered with name /marc stars/", () => {
    test("then it should find image with alter name /marc stars/ in the document", () => {
      const review = {
        image: "/img/fav-blank.png",
        name: "marc stars",
        review: "lorem ipsum",
        id: "2",
      };

      render(
        <Provider store={store}>
          <ReviewCard
            image={review.image}
            name={review.name}
            review={review.image}
            key={1}
            id={review.id}
            score={4}
          />
        </Provider>
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

      render(
        <Provider store={store}>
          <ReviewCard
            image={review.image}
            name={review.name}
            review={review.image}
            key={1}
            id={review.id}
            score={4}
          />
        </Provider>
      );

      const scoreStars = screen.getByRole("img", { name: /4 stars/i });

      expect(scoreStars).toBeInTheDocument();
    });
  });
});
