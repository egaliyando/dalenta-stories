import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../Loading/Spinner";
import "./index.css";
import { UilCheck } from "@iconscout/react-unicons";
import "../../assets/tailwind.css";
const Button = (props) => {
  const {
    content = "label-only",
    variant = "primary",
    children = "Button small",
    loading,
    theme = "blue-hedgehog",
    type = "",
    link = "/",
    action,
    className,
    icon,
  } = props;

  const DefaultButton = () => {
    return (
      <button
        onClick={action}
        type={type}
        disabled={loading ? true : false}
        className={`${variant} ${className} ${loading && "cursor-not-allowed"} ${
          !loading
            ? variant === "outlined"
              ? theme + "-outlined"
              : variant === "secondary"
              ? theme + "-secondary"
              : theme
            : variant === "outlined"
            ? theme + "-outlined-loading"
            : variant === "secondary"
            ? theme + "-secondary-loading"
            : theme + "-loading"
        }`}
      >
        {loading ? (
          <>
            {content === "icon-only" ? (
              <Spinner
                color={variant === "outlined" || variant === "secondary" ? "#859DFF" : "#FFFFFF"}
              />
            ) : (
              <div className="flex items-center">
                <Spinner
                  color={variant === "outlined" || variant === "secondary" ? "#859DFF" : "#FFFFFF"}
                />{" "}
                {children}
              </div>
            )}
          </>
        ) : content === "icon-only" ? (
          (
            <div>
              <UilCheck size={22} />
            </div>
          ) || icon
        ) : content === "icon-infront" ? (
          <div className="flex items-center">
            {<UilCheck size={22} /> || icon} <span className="ml-2">{children}</span>
          </div>
        ) : content === "icon-behind" ? (
          <div className="flex items-center">
            <span className="mr-2">{children}</span> {<UilCheck size={22} /> || icon}
          </div>
        ) : (
          children
        )}
      </button>
    );
  };

  return (
    <>
      {type === "link" ? (
        <Link to={link}>
          <DefaultButton />
        </Link>
      ) : (
        <DefaultButton />
      )}
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  theme: PropTypes.string,
  loading: PropTypes.bool,
  action: PropTypes.func,
};

export default Button;
