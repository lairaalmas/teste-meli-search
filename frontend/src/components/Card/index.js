import "../../css/Card.min.css";

const Card = ({ children, className }) => {
  return <div className={`Card ${className ? className : ""}`}>{children}</div>;
};

export default Card;
