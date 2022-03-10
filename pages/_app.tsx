import "../styles/globals.css";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import Navigation from "../components/layout/Navigation";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </Provider>
  );
}

export default MyApp;
