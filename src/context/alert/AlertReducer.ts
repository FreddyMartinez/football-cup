import { ActionInterface } from "../../util/interfaces";
import { REMOVE_ALERT, SET_ALERT } from "../Types";

export interface AlertStateIterface {
  type: string,
  message: string,
  setAlert: (message: string, type: string) => void
}

const AlertReducer = (state: AlertStateIterface, action: ActionInterface) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_ALERT: {
      return {
        ...state,
        message: "",
        type: ""
      };
    }
    default:
      return state;
  }
};

export default AlertReducer;