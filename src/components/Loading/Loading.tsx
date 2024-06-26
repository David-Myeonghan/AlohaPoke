import styles from "./Loading.module.scss";
import classNames from "classnames/bind";
import React from "react";

type LoadingPropType = {
  size?: "small" | "medium";
};

const cx = classNames.bind(styles);
export default function Loading({ size = "medium" }: LoadingPropType) {
  const className = cx(size, "spinner");

  return <div className={className}></div>;
}
