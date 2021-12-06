import { createContext } from "react";
import { AlertStateIterface } from "./AlertReducer";

export const initialState: AlertStateIterface = {
  type: "",
  message: "",
  setAlert: () => {}
};

const AlertContex = createContext<AlertStateIterface>(initialState);

export default AlertContex;
