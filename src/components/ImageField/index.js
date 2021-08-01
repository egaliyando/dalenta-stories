import { UilImagePlus } from "@iconscout/react-unicons";
import TextCaption from "../TextCaption";
import PropTypes from "prop-types";
import "./index.css";

const ImageField = (props) => {
  const { onChange, name, value, label = "", status = "", message = "" } = props;

  return (
    <>
      {label !== "" && <p className="text-gray-davys font-medium mb-2">{label}</p>}
      <div className={`w-40 h-40 bg-gray-culture rounded-2xl mb-2 ${status}`}>
        <label htmlFor="upload-button">
          {value ? (
            <img src={value} alt={value} className="w-full h-full rounded-2xl" />
          ) : (
            <>
              <span className="fa-stack fa-2x mt-3 mb-2">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-store fa-stack-1x fa-inverse" />
              </span>
              <div className="w-full h-full flex justify-center items-center">
                <UilImagePlus color="#8F8F8F" size={65} />
              </div>
            </>
          )}
        </label>
        <input
          name={name}
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={onChange}
        />
      </div>
      {status !== "" && <TextCaption status={status} message={message} />}
    </>
  );
};

ImageField.propTypes = {
  status: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  message: PropTypes.string,
};

export default ImageField;
