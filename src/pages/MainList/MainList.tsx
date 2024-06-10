import styles from "./MainList.module.scss";
import classNames from "classnames/bind";
import { useRandomPokemonList } from "../../utils/queries";
import PokemonList from "./ui/PokemonList";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);
export default function MainList() {
  const { data, isLoading } = useRandomPokemonList(20);

  return (
    <div className={cx("Main-list-layout")}>
      {isLoading ? <Loading /> : <PokemonList pokemonList={data} />}
      {/*<Loading />*/}
    </div>
  );
}
