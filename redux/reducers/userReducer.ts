import TypeOfAction from "../../types/TypeOfAction";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "../../types/User";

const userReducer = (currentUser: User[] = [], action: TypeOfAction | {}) => {
  let newUser;
  switch ((action as AnyAction).type) {
    case actionTypes.login:
      newUser = { ...(action as AnyAction).user };
      break;
    default:
      newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducer;
