import "./Header.scss";
import { ChangeEvent, useState } from "react";
import { Button } from "../index";

const MenuItem = [
  { name: "menu1", type: "menu" },
  { name: "menu2", type: "menu" },
  { name: "menu3", type: "menu" },
];
const SearchItem = { name: "Search", type: "search" };

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
