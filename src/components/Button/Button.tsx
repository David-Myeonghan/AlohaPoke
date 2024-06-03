import { MouseEvent } from "react";
import "./Button.scss";

type ButtonSizeType = "small" | "medium" | "massive";
type ButtonColorType = "primary" | "error";

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
      className={`${buttonSize} ${buttonColor}`}
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
      className = "button-small";
      break;
    case "medium":
    default:
      className = "button-medium";
      break;
    case "massive":
      className = "button-massive";
      break;
  }
  return className;
};

const getButtonColor = (color?: ButtonColorType) => {
  let className = "";
  switch (color) {
    case "primary":
    default:
      className = "color-primary";
      break;
    case "error":
      className = "color-error";
      break;
  }
  return className;
};
