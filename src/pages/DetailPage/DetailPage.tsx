import { useEffect } from "react";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";

import { usePokemonDetail } from "hooks/usePokemonDetail";
import { Button, Loading } from "components";
import { ROUTES } from "constants/routers";
import { RECENT_VIEW } from "utils/IndexedDB/IndexedDBSingleton";
import { addRecentPokemon } from "store/recentPokemon";

import styles from "./DetailPage.module.scss";
import PokemonImages from "./ui/PokemonImages";
import PokemonStats from "./ui/PokemonStats";
import PokemonIntro from "./ui/PokemonIntro";

const cx = classNames.bind(styles);
export default function DetailPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramName = queryParams.get("name");
  const currentPath = `${location.pathname}${location.search}`;

  const navigate = useNavigate();
  const { data, isLoading, isError } = usePokemonDetail(paramName ?? "");
  console.log(isError);

  useEffect(() => {
    if (!queryParams) return;
    const recent = { name: paramName ?? "", url: currentPath };
    addRecentPokemon(RECENT_VIEW, recent);
  }, [queryParams, currentPath]);

  if (isLoading || isError || !data) return <Loading />;

  return (
    <div className={cx("container")}>
      {/* Back Button */}
      <div className={cx("button-section")}>
        <Button onClick={() => navigate(ROUTES.index)} color={"primary"}>
          Back
        </Button>
      </div>

      <PokemonImages sprites={data.sprites} />
      <PokemonIntro data={data} />
      <PokemonStats stats={data.stats} />
    </div>
  );
}
