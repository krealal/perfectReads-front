import { Dispatch } from "redux";
import { loginAction } from "../actions/actionCreator";
import Router from "next/router";

const url: string = `${process.env.NEXT_PUBLIC_PERFECTREADS_API}`;

export const loginThunk = (user: any) => async (dispatch: Dispatch) => {
  const response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) return;

  const token = await response.json();
  const { username }: any = response;
  localStorage.setItem("token", token.token);
  dispatch(loginAction({ username, password: token.token }));
  () => {
    Router.push("/");
  };
};
