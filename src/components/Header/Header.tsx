import { ChangeEvent, useState } from "react";
import styles from "./Header.module.scss";
import { Button } from "../index";

const MenuItem = [
  { name: "small", size: "small" },
  { name: "medium", size: "medium" },
  { name: "Massive Button", size: "massive" },
] as const;
const SearchButton = { name: "Search", color: "error" } as const;

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
              key={menu.name}
              menu={menu}
              onClick={(e) => console.log(e)}
            />
          ))}
        </div>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            value={searchValue}
            onChange={handleSearchFieldChange}
          />
          <Button menu={SearchButton} onClick={(e) => console.log(e)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
