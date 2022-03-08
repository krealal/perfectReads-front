import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "../components/layout/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </NextUIProvider>
  );
}

export default MyApp;
