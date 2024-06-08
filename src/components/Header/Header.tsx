import { ChangeEvent, useState } from "react";
import styles from "./Header.module.scss";
import { Button } from "../index";
import classNames from "classnames/bind";

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

  const header = cx("header");
  const logo = cx("logo");
  const rightSection = cx("right-section");
  const menuBox = cx("menu-box");
  const searchBox = cx("search-box");
  const searchInput = cx("search-input");

  return (
    <header className={header}>
      <div className={logo}>
        <img src={"/logo/pokemon.webp"} alt="pokemon logo" />
      </div>

      <div className={rightSection}>
        <div className={menuBox}>
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
        <div className={searchBox}>
          <input
            className={searchInput}
            value={searchValue}
            onChange={handleSearchFieldChange}
          />
          <Button color={"error"} onClick={(e) => console.log(e)}>
            Search
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
