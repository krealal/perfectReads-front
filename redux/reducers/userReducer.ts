import TypeOfAction from "../../types/TypeOfAction";
import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const userReducer = (currentUser = {}, action: TypeOfAction | {}) => {
  let newToken;
  switch ((action as AnyAction).type) {
    case HYDRATE:
      return [...(action as AnyAction).payload.reviewsList];

    case actionTypes.login:
      newToken = { ...(action as AnyAction).user };
      break;
    default:
      newToken = { ...currentUser };
  }
  return newToken;
};

export default userReducer;
