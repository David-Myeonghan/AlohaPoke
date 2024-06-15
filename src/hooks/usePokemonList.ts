import { PokemonListParamType } from "constants/api";
import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "remote/pokemon";

export const usePokemonList = (params: PokemonListParamType) => {
  return useQuery({
    queryKey: usePokemonList.getKey(params),
    queryFn: () => getPokemonList(params),
  });
};

usePokemonList.getKey = (params: PokemonListParamType) => [
  "pokemon-list",
  params,
];
