import { ChangeEvent, useState } from "react";
import styles from "./Header.module.scss";
import { Button } from "../index";

const MenuItem = [
  { text: "small", size: "small" },
  { text: "medium", size: "medium" },
  { text: "Massive Button", size: "massive" },
] as const;

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={"/logo/pokemon.webp"} alt="pokemon logo" />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.menuBox}>
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
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
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
