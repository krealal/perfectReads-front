import TypeOfAction from "../../types/TypeOfAction";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const userReducer = (currentUser = {}, action: TypeOfAction | {}) => {
  let newUser;
  switch ((action as AnyAction).type) {
    case HYDRATE:
      return [...(action as AnyAction).payload.user];

    case actionTypes.login:
      newUser = { ...(action as AnyAction).user };
      break;
    default:
      newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducer;
