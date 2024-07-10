import styles from "./PokemonCard.module.scss";
import classNames from "classnames/bind";
import { Typography, LazyLoadImage } from "components";
import { pokemonType } from "types/pokemon";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routers";

const cx = classNames.bind(styles);

type PokemonCardPropType = {
  pokemon: pokemonType;
};
export default function PokemonCard({ pokemon }: PokemonCardPropType) {
  const navigate = useNavigate();
  const pokemonId = pokemon.url.match(/(?<=\b\/)\d+/)?.["0"];

  return (
    <div
      className={cx("card-layout")}
      onClick={() => navigate(`${ROUTES.detail.root}?name=${pokemon.name}`)}
    >
      <LazyLoadImage
        imageSource={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        alt={pokemon.name}
      />
      <Typography size={"t3"}>{pokemon.name}</Typography>
    </div>
  );
}
