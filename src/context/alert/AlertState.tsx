import React, { useReducer } from "react";
import AlertContext, { initialState } from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { REMOVE_ALERT, SET_ALERT } from "../Types";

const AlertState = (props: { children: any }) => {

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert
  const setAlert = (message: string, type: string) => {
    dispatch({ type: SET_ALERT, payload: { message: message, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        type: state.type,
        message: state.message,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
