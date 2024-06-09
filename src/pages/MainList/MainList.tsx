import styles from "./MainList.module.scss";
import classNames from "classnames/bind";
import { useRandomPokemonList } from "../../utils/queries";
import PokemonList from "./ui/PokemonList";

const cx = classNames.bind(styles);
export default function MainList() {
  const { data, isLoading } = useRandomPokemonList(20);

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={cx("Main-list-layout")}>
      <PokemonList pokemonList={data ?? []} />
    </div>
  );
}
