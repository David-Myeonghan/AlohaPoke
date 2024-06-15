import classNames from "classnames/bind";
import styles from "./ErrorPage.module.scss";
import { Typography } from "components";

const cx = classNames.bind(styles);
export default function ErrorPage() {
  return (
    <div className={cx("error-layout")}>
      <div className={cx("error-content")}>
        <Typography size={"t1"}>Something's wrong!</Typography>
      </div>
    </div>
  );
}
