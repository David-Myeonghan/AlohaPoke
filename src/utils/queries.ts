import { useQuery } from "@tanstack/react-query";
import { api } from "utils/ajax/instance";
import {
  pokemonDetail,
  pokemonList,
  PokemonListParamType,
} from "constants/api";

export type pokemonType = {
  name: string;
  url: string;
};

export type PokemonListResponseType = {
  results: pokemonType[];
};

const getPokemonList = async (params: PokemonListParamType) => {
  const response = await api.get(pokemonList(params)).json();
  console.log(response);
  return response as PokemonListResponseType;
};

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

export type PokemonDetailResponseType = {
  sprites: { front_default: string };
  name: string;
};
const getPokemonDetail = async (idOrName: string) => {
  try {
    const response = await api.get(pokemonDetail(idOrName)).json();
    return response as PokemonDetailResponseType;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const usePokemonDetail = (idOrName: string) => {
  return useQuery({
    queryKey: usePokemonDetail.getKey(idOrName),
    queryFn: () => getPokemonDetail(idOrName),
  });
};

usePokemonDetail.getKey = (idOrName: string) => ["pokemon-detail", idOrName];
