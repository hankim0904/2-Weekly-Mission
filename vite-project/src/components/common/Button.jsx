import "./button.css";

function Button({ children, variant, size, ...props }) {
  return (
    <button className={`btn-base btn-size-${size} btn-${variant}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
