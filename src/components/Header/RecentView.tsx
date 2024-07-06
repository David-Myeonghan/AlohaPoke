import styles from "./RecentView.module.scss";
import classNames from "classnames/bind";
import { Typography } from "../index";
import { useEffect, useState } from "react";
import IndexedDBSingleton, {
  RECENT_VIEW,
  RecentViewedPokemonType,
} from "utils/IndexedDB/IndexedDBSingleton";
import { useLocation, useNavigate } from "react-router-dom";
import useIndexChange from "hooks/useIndexChange";

const cx = classNames.bind(styles);
export default function RecentView() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [recentPokemonList, setRecentPokemonList] = useState<
    RecentViewedPokemonType[]
  >([]);

  const { index } = useIndexChange(recentPokemonList.length);

  useEffect(() => {
    IndexedDBSingleton.getAllRecentPokemon(RECENT_VIEW).then((res) => {
      setRecentPokemonList(res);
    });
  }, [pathname]);

  return (
    <>
      {recentPokemonList.length ? (
        <div className={cx("container")}>
          <Typography size={"t2"}>Recently Viewed:&nbsp;</Typography>
          <span onClick={() => navigate(recentPokemonList[index].url)}>
            <Typography size={"t2"}>{recentPokemonList[index].name}</Typography>
          </span>
        </div>
      ) : null}
    </>
  );
}
