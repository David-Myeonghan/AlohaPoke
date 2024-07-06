import styles from "./RecentView.module.scss";
import classNames from "classnames/bind";
import { Typography } from "../index";
import { useEffect, useRef, useState } from "react";
import IndexedDBSingleton, {
  RECENT_VIEW,
  RecentViewedPokemonType,
} from "utils/IndexedDB/IndexedDBSingleton";
import { useLocation, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
export default function RecentView() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [recentPokemonList, setRecentPokemonList] = useState<
    RecentViewedPokemonType[]
  >([]);
  console.log(recentPokemonList);
  const { index } = useIndexChange(recentPokemonList.length);

  // const nameRef = useRef();

  useEffect(() => {
    // const draw = () => {
    //   const rafId = requestAnimationFrame(draw);
    // };
    //
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

const useIndexChange = (maxLength: number) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (maxLength === 0) return;

    const indexInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % maxLength);
    }, 1000);

    return () => {
      clearInterval(indexInterval);
    };
  }, [maxLength]);

  return { index };
};
