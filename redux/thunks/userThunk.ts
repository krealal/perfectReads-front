import jwtDecode from "jwt-decode";
import { Dispatch } from "redux";
import { UserRegister } from "../../types/User";
import toastMessage from "../../utils/toast";
import { loginAction, registerAction } from "../actions/actionCreator";

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

export const registerThunk =
  (user: UserRegister) => async (dispatch: Dispatch) => {
    const data = new FormData();
    data.append("username", user.username);
    data.append("password", user.password);
    data.append("name", user.name);
    data.append("image", user.image);
    data.append("about", user.about);
    data.append("email", user.email);

    const response = await fetch(`${url}/user/register`, {
      method: "POST",
      mode: "cors",
      body: data,
    });
    if (!response.ok) return;
    const newUser: UserRegister = await response.json();
    await dispatch(registerAction(newUser));
    toastMessage("User successfully created!", "normal");
  };
