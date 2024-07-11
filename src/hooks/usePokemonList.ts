import { PokemonListParam } from "constants/api";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "remote/pokemon";

export const usePokemonList = (params: PokemonListParam) => {
  return useQuery({
    queryKey: usePokemonList.getKey(params),
    queryFn: () => getPokemonList(params),
  });
};

usePokemonList.getKey = (params: PokemonListParam) => ["pokemon-list", params];
