import styles from "./DetailPage.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
export default function DetailPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  return (
    <div>
      <span>{name}</span>
    </div>
  );
}
