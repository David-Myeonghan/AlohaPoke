import { MouseEvent } from "react";
import "./Button.scss";

type ButtonSizeType = "small" | "medium" | "massive";
type ButtonColorType = "primary" | "error";
// type variant??

type ButtonPropType = {
  menu: { name: string; size?: ButtonSizeType; color?: ButtonColorType };
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ menu, onClick }: ButtonPropType) => {
  const buttonSize = getButtonSize(menu.size);
  const buttonColor = getButtonColor(menu.color);

  return (
    <button
      key={menu.name}
      className={`common ${buttonSize} ${buttonColor}`}
      onClick={onClick}
    >
      {menu.name}
    </button>
  );
};

export default Button;

const getButtonSize = (size?: ButtonSizeType) => {
  let className = "";
  switch (size) {
    case "small":
      className = "small";
      break;
    case "medium":
    default:
      className = "medium";
      break;
    case "massive":
      className = "massive";
      break;
  }
  return className;
};

const getButtonColor = (color?: ButtonColorType) => {
  let className = "";
  switch (color) {
    case "primary":
    default:
      className = "primary";
      break;
    case "error":
      className = "error";
      break;
  }
  return className;
};
