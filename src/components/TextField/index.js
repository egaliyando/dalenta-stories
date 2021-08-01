import PropTypes from "prop-types";
import TextCaption from "../TextCaption";
import "./index.css";

const TextField = (props) => {
  const {
    variant = "primary",
    size = "small",
    label = "",
    placeholder = "Placeholder",
    status = "",
    name = "",
    className = "",
    message = "",
    unit = "",
    disabled,
    value,
    onChange,
    icon,
  } = props;

  return (
    <>
      {label !== "" && (
        <label
          className={
            variant === "primary" ? "text-sm text-blue-hedgehog" : "text-sm text-gray-davys"
          }
        >
          {label}
        </label>
      )}
      <div
        className={`${className} ${size + "-text-field"} ${variant + "-text-field py-2 px-3"} ${
          status + "-text-field mb-2 mt-1 flex justify-between items-center"
        } ${disabled && "cursor-not-allowed"}`}
      >
        <input
          placeholder={placeholder}
          className={`${variant + "-text-field"} focus:outline-none bg-none`}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
        />

        {!icon && unit !== "" && <span>{unit}</span>}
        {!unit && icon && icon}
      </div>
      {status !== "" && <TextCaption status={status} message={message} />}
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  status: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  message: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func,
};

export default TextField;
