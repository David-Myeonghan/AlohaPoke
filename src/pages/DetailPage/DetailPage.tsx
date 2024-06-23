import styles from "./DetailPage.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { Button, Loading, Typography } from "../../components";
import PokemonImages from "./ui/PokemonImages";
import PokemonStats from "./ui/PokemonStats";
import { ErrorPage } from "../ErrorPage";

const cx = classNames.bind(styles);
export default function DetailPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramName = queryParams.get("name");

  const navigate = useNavigate();

  const { data, isLoading } = usePokemonDetail(paramName ?? "");

  if (isLoading)
    return (
      <div className={cx("loading")}>
        <Loading />
      </div>
    );
  if (data == null) {
    return <ErrorPage />;
  }

  return (
    <div className={cx("container")}>
      {/* Back Button */}
      <div className={cx("button-section")}>
        <Button onClick={() => navigate(-1)} color={"primary"}>
          Back
        </Button>
      </div>

      <PokemonImages sprites={data.sprites} />

      <div className={cx("intro-section")}>
        <div className={cx("name-box")}>
          <Typography size={"t1"}>{data.name}</Typography>
          <Typography size={"t3"}>#&nbsp;{data.id}</Typography>
        </div>
      </div>

      <div className={cx("character-section")}>
        <div>
          <Typography size={"t2"}>
            {`Height: ${data.height} cm`}&nbsp;
          </Typography>
          <Typography size={"t2"}>{`Weight: ${data.weight} kg`}</Typography>
        </div>

        {data.types.map(({ type, slot }) => (
          <div key={type.name}>
            <Typography size={"t3"}>{type.name}</Typography>
          </div>
        ))}
      </div>

      <PokemonStats stats={data.stats} />
    </div>
  );
}
