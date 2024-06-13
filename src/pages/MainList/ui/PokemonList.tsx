import styles from "./PokemonList.module.scss";
import PokemonCard from "./PokemonCard";
import classNames from "classnames/bind";
import { pokemonType } from "../../../utils/queries";

const cx = classNames.bind(styles);

type PokemonListPropType = {
  pokemonList: pokemonType[] | undefined;
};
export default function PokemonList({ pokemonList }: PokemonListPropType) {
  return (
    <div className={cx("List-layout")}>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
