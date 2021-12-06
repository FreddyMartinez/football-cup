import { Fragment, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { type, message } = alertContext;
  
  if (message === "") {
    return <Fragment></Fragment>;
  }

  return (
    <div className={`alert alert-${type}`}>
      <i className='fas fa-info-circle'></i> {message}
    </div>
  );
};

export default Alert;
