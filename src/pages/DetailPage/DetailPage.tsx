import styles from "./DetailPage.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { useEffect } from "react";

const cx = classNames.bind(styles);
export default function DetailPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  const { data } = usePokemonDetail(name ?? "");
  console.log(data);

  if (!data) return <div>Error</div>;

  return (
    <div>
      <div>{data?.name}</div>
      <div>{data?.id}</div>
      <div>{data?.base_experience}</div>
      <div>{data?.height}</div>
      <div>{data?.weight}</div>
      {data?.types.map(({ type }) => <div key={type.name}>{type.name}</div>)}
      {data?.stats.map(({ base_stat, stat }) => (
        <div key={stat.name}>
          {stat.name}: {base_stat}
        </div>
      ))}
      {data?.abilities.map(({ ability }) => (
        <div key={ability.name}>{ability.name}</div>
      ))}
    </div>
  );
}
