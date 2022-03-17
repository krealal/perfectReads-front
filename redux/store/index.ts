import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "../reducers";

import { Context, createWrapper } from "next-redux-wrapper";

const store = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store>(store);
