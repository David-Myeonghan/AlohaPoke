import styles from "./MainList.module.scss";
import classNames from "classnames/bind";
import { usePokemonList } from "hooks/usePokemonList";
import PokemonList from "./ui/PokemonList";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);
export default function MainList() {
  const { data, isLoading } = usePokemonList({ limit: 20 });

  return (
    <div className={cx("main-list-layout")}>
      {isLoading ? <Loading /> : <PokemonList pokemonList={data?.results} />}
      {/*<Loading />*/}
    </div>
  );
}
