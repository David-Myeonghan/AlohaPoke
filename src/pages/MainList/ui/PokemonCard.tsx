import { PokemonResponseType } from "utils/queries";
import styles from "./PokemonCard.module.scss";
import classNames from "classnames/bind";
import { Typography } from "components";

const cx = classNames.bind(styles);

type PokemonCardPropType = {
  pokemon: PokemonResponseType;
};
export default function PokemonCard({ pokemon }: PokemonCardPropType) {
  return (
    <div className={cx("Card-layout")}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Typography size={"t3"}>{pokemon.name}</Typography>
    </div>
  );
}
