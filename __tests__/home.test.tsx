import "whatwg-fetch";
import { render, screen, waitFor } from "@testing-library/react";
import Home, { getServerSideProps } from "../pages/index";
import { wrapper } from "../redux/store";
import { GetServerSidePropsContext } from "next";
import userEvent from "@testing-library/user-event";

describe("given a home page ", () => {
  describe("when its rendered", () => {
    test("then it should find h1 /The Way Of Kings/ in the document", async () => {
      const WrappedComponent = wrapper.withRedux(Home);
      render(<WrappedComponent />);
      const bookTittle = "The Way Of Kings";

      const renderTittle = screen.getByRole("heading", {
        name: bookTittle,
      });

      expect(renderTittle).toBeInTheDocument();
    });
    test("Then it should find marta in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(Home);
      const context = {
        params: {},
      };
      render(<WrappedComponent />);

      const getSSR = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      const marta = await screen.findByText("marta");

      expect(marta).toBeInTheDocument();
    });

    test("Then it should find score image with tittle  `luis's score`", async () => {
      const WrappedComponent = wrapper.withRedux(Home);
      const context = {
        params: {},
      };
      render(<WrappedComponent />);

      const getSSR = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      const luis = await screen.findByTitle(/luis's score/i);

      expect(luis).toBeInTheDocument();
    });
  });
});
