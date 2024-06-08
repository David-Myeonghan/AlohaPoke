import React, { MouseEvent } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

type ButtonSizeType = "small" | "medium" | "massive";
type ButtonColorType = "primary" | "error";

type ButtonPropType = {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  children?: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const cx = classNames.bind(styles);

const Button = ({
  size = "medium",
  color = "primary",
  onClick,
  children,
}: ButtonPropType) => {
  const className = cx("common", size, color);

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
