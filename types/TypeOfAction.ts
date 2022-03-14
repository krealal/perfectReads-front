import { Review } from "./Review";

interface TypeOfAction {
  type: string;
  payload: Review[] | Review | string | undefined;
}

export default TypeOfAction;
