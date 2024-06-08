import { MouseEvent } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

type ButtonSizeType = "small" | "medium" | "massive";
type ButtonColorType = "primary" | "error";
// type variant??

type ButtonPropType = {
  menu: { name: string; size?: ButtonSizeType; color?: ButtonColorType };
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const cx = classNames.bind(styles);

const Button = ({ menu, onClick }: ButtonPropType) => {
  const { name, size, color } = menu;
  const className = cx("common", size ?? "medium", color ?? "primary");

  return (
    <button key={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
