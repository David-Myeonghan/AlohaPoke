import "./Header.scss";
import { ChangeEvent, useState } from "react";
import { Button } from "../index";

const MenuItem = [
  { name: "menu1", size: "medium", color: "primary" },
  { name: "menu2", size: "medium", color: "primary" },
  { name: "menu3", size: "medium", color: "primary" },
] as const;
const SearchItem = { name: "Search", size: "medium", color: "error" } as const;

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={"/logo/pokemon.webp"} alt="pokemon logo" />
      </div>

      <div className="right-section">
        <div className="menu-box">
          {MenuItem.map((menu) => (
            <Button
              key={menu.name}
              menu={menu}
              onClick={(e) => console.log(e)}
            />
          ))}
        </div>
        <div className="search-box">
          <input
            className="search-input"
            value={searchValue}
            onChange={handleSearchFieldChange}
          />
          <Button menu={SearchItem} onClick={(e) => console.log(e)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
