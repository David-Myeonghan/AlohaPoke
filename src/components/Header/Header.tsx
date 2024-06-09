import { ChangeEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Button } from "components";

const MenuItem = [
  { text: "small", size: "small" },
  { text: "medium", size: "medium" },
  { text: "Massive Button", size: "massive" },
] as const;

const cx = classNames.bind(styles);

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className={cx("App")}>
      <header className={cx("header")}>
        <div className={cx("logo")}>
          <img src={"/logo/pokemon.webp"} alt="pokemon logo" />
        </div>

        <div className={cx("right-section")}>
          <div className={cx("menu-box")}>
            {MenuItem.map((menu) => (
              <Button
                key={menu.text}
                size={menu.size}
                onClick={(e) => console.log(e)}
              >
                {menu.text}
              </Button>
            ))}
          </div>
          <div className={cx("search-box")}>
            <input
              className={cx("search-input")}
              value={searchValue}
              onChange={handleSearchFieldChange}
            />
            <Button color={"error"} onClick={(e) => console.log(e)}>
              Search
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
