import "./Header.scss";
import { ChangeEvent, useState } from "react";

const MenuItem = [{ name: "menu1" }, { name: "menu2" }, { name: "menu3" }];
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
            <button key={menu.name} className="menu-button">
              {menu.name}
            </button>
          ))}
        </div>
        <div>
          <input
            className="search-input"
            value={searchValue}
            onChange={handleSearchFieldChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
