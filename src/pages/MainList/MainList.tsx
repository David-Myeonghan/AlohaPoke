import styles from "./MainList.module.scss";
import classNames from "classnames/bind";
import { useRandomPokemonList } from "../../utils/queries";

const cx = classNames.bind(styles);
export default function MainList() {
  const { data } = useRandomPokemonList();

  console.log(data);

  return (
    <div>
      <span>Main List Page</span>
    </div>
  );
}
