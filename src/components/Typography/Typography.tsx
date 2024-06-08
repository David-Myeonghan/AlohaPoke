import React from "react";
import classNames from "classnames/bind";
import styles from "./Typography.module.scss";

type TypographySizeType = "t1" | "t2" | "t3" | "t4";

const cx = classNames.bind(styles);

type TypographyPropType = {
  children?: React.ReactNode;
  size: TypographySizeType;
  tag?: string;
};
const Typography = ({ children, size }: TypographyPropType) => {
  const className = cx(size ?? "t3");
  const Tag = size === "t1" ? "h1" : size === "t2" ? "h2" : "p";

  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
