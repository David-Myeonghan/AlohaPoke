import styles from "./DetailPage.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { Button, Loading, Typography } from "../../components";

const cx = classNames.bind(styles);
export default function DetailPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  const navigate = useNavigate();

  const { data, isLoading } = usePokemonDetail(name ?? "");

  if (isLoading)
    return (
      <div className={cx("loading")}>
        <Loading />
      </div>
    );

  return (
    <div className={cx("container")}>
      {/* Back Button */}
      <div className={cx("button-section")}>
        <Button onClick={() => navigate(-1)} color={"primary"}>
          Back
        </Button>
      </div>

      <div className={cx("image-section")}>
        <img src={data?.sprites.front_default} />
        <img src={data?.sprites.other.dream_world.front_default} />
        <img src={data?.sprites.other["official-artwork"].front_default} />
      </div>

      <div className={cx("intro-section")}>
        <div className={cx("name-box")}>
          <Typography size={"t1"}>{data?.name}</Typography>
          <Typography size={"t3"}>#&nbsp;{data?.id}</Typography>
        </div>
      </div>

      <div className={cx("character-section")}>
        <div>
          <Typography size={"t2"}>
            {`Height: ${data?.height} cm`}&nbsp;
          </Typography>
          <Typography size={"t2"}>{`Weight: ${data?.weight} kg`}</Typography>
        </div>

        {data?.types.map(({ type, slot }) => (
          <div key={type.name}>
            <Typography size={"t3"}>{type.name}</Typography>
          </div>
        ))}
      </div>

      <div className={cx("stat-section")}>
        <div className={cx("stat-box")}>
          {data?.stats.map(({ base_stat, stat }) => (
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
    </div>
  );
}
