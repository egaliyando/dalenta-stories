import React from "react";
import PropTypes from "prop-types";
import { UilCheck, UilTimes, UilExclamationCircle, UilInfoCircle } from "@iconscout/react-unicons";
import "./index.css";

const TextCaption = (props) => {
  const { status = "Additional text", message = "" } = props;

  const [title, setTitle] = React.useState("");
  const [icon, setIcon] = React.useState();

  const setRequired = () => {
    if (message !== "") {
      setTitle(message);
    } else {
      setTitle("This field is required");
    }
    setIcon(<UilTimes size={22} />);
  };
  const setWarning = () => {
    if (message !== "") {
      setTitle(message);
    } else {
      setTitle("This field is not strong enough");
    }
    setIcon(<UilInfoCircle size={23} />);
  };
  const setSuccess = () => {
    if (message !== "") {
      setTitle(message);
    } else {
      setTitle("Field validation is successful");
    }
    setIcon(<UilCheck size={22} />);
  };
  const setDefault = () => {
    if (message !== "") {
      setTitle(message);
    } else {
      setTitle("Additional text");
    }
    setIcon(<UilExclamationCircle size={20} />);
  };
  const setStatus = () => {
    status === "required"
      ? setRequired()
      : status === "warning"
      ? setWarning()
      : status === "success"
      ? setSuccess()
      : setDefault();
  };
  React.useEffect(() => {
    setStatus();
  }, [status, message, icon]);

  return (
    <span className={status + "-capt flex text-sm"}>
      <div className="mr-1">{icon}</div>
      {title}
    </span>
  );
};

TextCaption.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
};

export default TextCaption;
