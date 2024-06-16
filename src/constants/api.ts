const pokemon = "pokemon";

export type PokemonListParamType = {
  limit: number;
  offset?: number;
};
export const pokemonList = ({ limit = 10, offset }: PokemonListParamType) =>
  `${pokemon}?limit=${limit}${offset ? `&offset=${offset}` : ""}`;

export const pokemonDetail = (IdOrName: string) => `pokemon/${IdOrName}`;
