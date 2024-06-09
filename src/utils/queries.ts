import { useQuery } from "@tanstack/react-query";
import { getRandomPokemonIds } from "./random";
import { api } from "./ajax/instance";
import { pokemon } from "../constants/api";

const getMultiRandomPokemonList = async (number: number) => {
  const ids = getRandomPokemonIds(number);
  const promises = ids.map((id) => api.get(pokemon(id)).json());
  try {
    const pokemonList = await Promise.all(promises);
    return pokemonList;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const useRandomPokemonList = (number: number = 10) => {
  return useQuery({
    queryKey: useRandomPokemonList.getKey(number),
    queryFn: () => getMultiRandomPokemonList(number),
  });
};

useRandomPokemonList.getKey = (number: number) => [
  "random-pokemon-list",
  number,
];
