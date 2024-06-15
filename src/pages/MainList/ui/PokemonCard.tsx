import styles from "./PokemonCard.module.scss";
import classNames from "classnames/bind";
import { Typography } from "components";
import { useEffect, useRef } from "react";
import Loading from "components/Loading/Loading";
import { pokemonType } from "types/pokemon";

const cx = classNames.bind(styles);

type PokemonCardPropType = {
  pokemon: pokemonType;
};
export default function PokemonCard({ pokemon }: PokemonCardPropType) {
  const pokemonId = pokemon.url.match(/(?<=\b\/)\d+/)?.["0"];

  const loadingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const loadingElement = loadingRef.current;
    const imageElement = imageRef.current;
    const handleLoad = () => {
      if (loadingElement) {
        loadingElement.style.display = "none";
      }
      if (imageElement) {
        imageElement.style.visibility = "visible";
      }
    };

    if (imageElement) {
      imageElement.onload = handleLoad;
    }

    return () => {
      if (imageElement) {
        imageElement.onload = null;
      }
    };
  }, []);

  return (
    <div className={cx("card-layout")}>
      <div ref={loadingRef} className={cx("loading-box")}>
        <Loading size="small" />
      </div>

      <img
        src={`https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        alt={pokemon.name}
        loading="lazy"
        ref={imageRef}
      />
      <Typography size={"t3"}>{pokemon.name}</Typography>
    </div>
  );
}
