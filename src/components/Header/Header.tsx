import { ChangeEvent, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Button, Typography } from "components";
import IndexedDBSingleton, {
  RECENT_VIEW,
  RecentViewedPokemonType,
} from "utils/IndexedDB/IndexedDBSingleton";

const cx = classNames.bind(styles);

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [recentPokemonList, setRecentPokemonList] = useState<
    RecentViewedPokemonType[]
  >([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSearchFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    IndexedDBSingleton.getAllRecentPokemon(RECENT_VIEW).then((res) => {
      setRecentPokemonList(res);
    });
  }, [pathname]);

  return (
    <div className={cx("container")}>
      <header className={cx("header")}>
        <div className={cx("logo")}>
          <img src={"/logo/pokemon.webp"} alt="pokemon logo" />
        </div>

        {recentPokemonList.length ? (
          <div className={cx("middle-section")}>
            <Typography size={"t2"}>Recently Viewed:&nbsp;</Typography>
            <span onClick={() => navigate(recentPokemonList[0].url)}>
              <Typography size={"t2"}>{recentPokemonList[0].name}</Typography>
            </span>
          </div>
        ) : null}

        <div className={cx("right-section")}>
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
      <div className={cx("content-wrapper")}>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
