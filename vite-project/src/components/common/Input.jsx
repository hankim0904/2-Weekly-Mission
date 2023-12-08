import "./input.css";

const Input = ({ type = "text", ...props }) => {
  return <input className="input" type={type} {...props} />;
};

export default Input;
