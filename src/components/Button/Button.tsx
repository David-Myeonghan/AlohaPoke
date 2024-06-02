import { MouseEvent } from "react";
import "./Button.scss";

type ButtonPropType = {
  menu: { name: string; type: string | undefined };
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({ menu, onClick }: ButtonPropType) => {
  const className = getButtonStyle(menu.type);
  return (
    <button key={menu.name} className={className} onClick={onClick}>
      {menu.name}
    </button>
  );
};

export default Button;

const getButtonStyle = (type: string | undefined) => {
  let className = "";
  switch (type) {
    case "search":
      className = "button-search";
      break;
    case "menu":
    default:
      className = "button-menu";
      break;
  }
  return className;
};
