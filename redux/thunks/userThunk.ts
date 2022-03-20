import jwtDecode from "jwt-decode";
import { Dispatch } from "redux";
import { loginAction } from "../actions/actionCreator";

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
  const { username }: any = await jwtDecode(token.token);

  localStorage.setItem("token", token.token);
  dispatch(loginAction({ username, password: token.token }));
};
