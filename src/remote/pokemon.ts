import {
  pokemonDetail,
  pokemonList,
  PokemonListParamType,
} from "constants/api";
import { api } from "utils/ajax/instance";
import {
  PokemonDetailResponseType,
  PokemonListResponseType,
} from "types/pokemon";

export const getPokemonList = async (params: PokemonListParamType) => {
  const response = await api.get(pokemonList(params)).json();
  return response as PokemonListResponseType;
};

export const getPokemonDetail = async (idOrName: string) => {
  try {
    const response = await api.get(pokemonDetail(idOrName)).json();
    return response as PokemonDetailResponseType;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
