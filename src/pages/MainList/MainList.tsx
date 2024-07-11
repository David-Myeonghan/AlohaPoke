import classNames from "classnames/bind";
import { usePokemonList } from "hooks/usePokemonList";
import Loading from "components/Loading/Loading";
import { ErrorPage } from "pages/ErrorPage";

import styles from "./MainList.module.scss";
import PokemonList from "./ui/PokemonList";

const cx = classNames.bind(styles);
export default function MainList() {
  const { data, isLoading } = usePokemonList({ limit: 20 });

  return (
    <div className={cx("main-list-layout")}>
      {isLoading === true ? <Loading /> : null}
      {isLoading === false && data == null ? (
        <ErrorPage />
      ) : (
        <PokemonList pokemonList={data?.results} />
      )}
    </div>
  );
}
