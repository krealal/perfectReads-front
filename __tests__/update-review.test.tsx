import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import UpdateReview from "../pages/update-review";
import { wrapper } from "../redux/store";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/update-review",
      query: { id: "123" },
    };
  },
}));

describe("given a update-review page", () => {
  describe("when its rendered", () => {
    test("then it should the heading 'update review'", async () => {
      const WrappedComponent = await wrapper.withRedux(UpdateReview);

      render(<WrappedComponent />);

      const header = await screen.findByRole("heading", {
        name: /update review/i,
      });

      expect(header).toBeInTheDocument();
    });
  });
});
