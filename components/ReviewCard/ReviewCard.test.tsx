import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
        _id: "2",
      };

      render(
        <Provider store={store}>
          <ReviewCard
            image={review.image}
            name={review.name}
            review={review.image}
            key={1}
            _id={review._id}
          />
        </Provider>
      );

      const renderImage = screen.getByRole("img", { name: review.name });

      expect(renderImage).toBeInTheDocument();
    });
  });
});
