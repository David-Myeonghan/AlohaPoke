import { PokemonResponseType } from "utils/queries";
import styles from "./PokemonCard.module.scss";
import classNames from "classnames/bind";
import { Typography } from "components";
import { useEffect, useRef } from "react";
import Loading from "components/Loading/Loading";

const cx = classNames.bind(styles);

type PokemonCardPropType = {
  pokemon: PokemonResponseType;
};
export default function PokemonCard({ pokemon }: PokemonCardPropType) {
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
        imageElement.style.display = "block";
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
    <div className={cx("Card-layout")}>
      <div ref={loadingRef} className={cx("Loading-box")}>
        <Loading size="small" />
      </div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        ref={imageRef}
      />
      <Typography size={"t3"}>{pokemon.name}</Typography>
    </div>
  );
}
