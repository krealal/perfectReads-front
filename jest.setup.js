import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "whatwg-fetch";
import { server } from "./mocks/server";
import rootReducer from "./redux/reducers";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const store = createStore(rootReducer, applyMiddleware(thunk));

export const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};
