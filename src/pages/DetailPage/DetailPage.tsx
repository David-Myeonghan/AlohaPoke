import styles from "./DetailPage.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { Button, Loading } from "../../components";
import PokemonImages from "./ui/PokemonImages";
import PokemonStats from "./ui/PokemonStats";
import PokemonIntro from "./ui/PokemonIntro";
import { ROUTES } from "../../constants/routers";

const cx = classNames.bind(styles);
export default function DetailPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramName = queryParams.get("name");

  const navigate = useNavigate();

  const { data, isLoading } = usePokemonDetail(paramName ?? "");

  return (
    <div className={cx("container")}>
      {/* Back Button */}
      <div className={cx("button-section")}>
        <Button onClick={() => navigate(ROUTES.index)} color={"primary"}>
          Back
        </Button>
      </div>

      <PokemonImages sprites={data.sprites} />
      <PokemonIntro data={data} />
      <PokemonStats stats={data.stats} />
    </div>
  );
}
