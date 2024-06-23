import styles from "./PokemonStats.module.scss";
import classNames from "classnames/bind";
import { Typography } from "components";
import { StatsType } from "types/pokemon";

const cx = classNames.bind(styles);

type PokemonStatsPropType = {
  stats: StatsType[];
};
export default function PokemonStats({ stats }: PokemonStatsPropType) {
  return (
    <div className={cx("stat-section")}>
      <div className={cx("stat-box")}>
        {stats.map(({ base_stat, stat }) => (
          <div key={stat.name}>
            <Typography size={"t3"}>{stat.name}</Typography>
            <span className={cx("percentage-bar")}>
              <span
                style={{ width: `${base_stat}%` }}
                className={cx("progress")}
              >
                <span>
                  <Typography size={"t4"}>{base_stat}</Typography>
                </span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
