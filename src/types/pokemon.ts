export type PokemonDetailResponseType = {
  sprites: { front_default: string };
  name: string;
};

export type pokemonType = {
  name: string;
  url: string;
};

export type PokemonListResponseType = {
  results: pokemonType[];
};
