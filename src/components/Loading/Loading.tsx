import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function Loading() {
  return <div className={cx("spinner")}></div>;
}
