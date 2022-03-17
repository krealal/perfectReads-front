import "../styles/globals.css";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import Navigation from "../components/layout/Navigation";
import { FC } from "react";
import { wrapper } from "../redux/store";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
};

export default wrapper.withRedux(WrappedApp);
