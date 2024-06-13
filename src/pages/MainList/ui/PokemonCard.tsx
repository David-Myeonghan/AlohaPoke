import { pokemonType } from "utils/queries";
import styles from "./PokemonCard.module.scss";
import classNames from "classnames/bind";
import { Typography } from "components";
import { useEffect, useRef } from "react";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);

type PokemonCardPropType = {
  pokemon: pokemonType;
};
export default function PokemonCard({ pokemon }: PokemonCardPropType) {
  const pokemonId = pokemon.url.match(/(?<=\b\/)\d+/)?.["0"];

  const imageRef = useRef<HTMLImageElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const loadingElement = loadingRef.current;

    const showImage = () => {
      if (loadingElement) {
        loadingElement.style.display = "none";
      }
      if (imageElement) {
        imageElement.style.display = "inline";
      }
    };

    if (imageElement) {
      imageElement.addEventListener("load", showImage);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener("load", showImage);
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
        ref={imageRef}
      />
      <Typography size={"t3"}>{pokemon.name}</Typography>
    </div>
  );
}
