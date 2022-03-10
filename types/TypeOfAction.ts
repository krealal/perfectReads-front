import Review from "./Review";

interface TypeOfAction {
  type: string;
  payload: Review[] | Review | undefined;
}

export default TypeOfAction;
