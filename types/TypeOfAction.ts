import { Review } from "./Review";
import { User } from "./User";

interface TypeOfAction {
  type: string;
  payload: Review[] | Review | string | User | User[] | undefined;
}

export default TypeOfAction;
