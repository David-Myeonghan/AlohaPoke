import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "remote/pokemon";

export const usePokemonDetail = (idOrName: string) => {
  return useQuery({
    queryKey: usePokemonDetail.getKey(idOrName),
    queryFn: () => getPokemonDetail(idOrName),
  });
};

usePokemonDetail.getKey = (idOrName: string) => ["pokemon-detail", idOrName];
