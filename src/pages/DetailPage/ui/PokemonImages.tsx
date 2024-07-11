import { SpritesType } from "types/pokemon";
import classNames from "classnames/bind";

import styles from "./PokemonImages.module.scss";

const cx = classNames.bind(styles);

interface PokemonImagesProps {
  sprites: SpritesType;
}
export default function PokemonImages({ sprites }: PokemonImagesProps) {
  const { front_default, other } = sprites;

  return (
    <div className={cx("image-section")}>
      <img src={front_default} />
      <img src={other.dream_world.front_default} />
      <img src={other["official-artwork"].front_default} />
    </div>
  );
}
