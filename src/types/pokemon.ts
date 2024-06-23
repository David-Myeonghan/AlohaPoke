export type SpritesType = {
  front_default: string;
  other: {
    dream_world: { front_default: string };
    "official-artwork": { front_default: string };
  };
};

export type PokemonDetailResponseType = {
  sprites: SpritesType;
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  //
  types: { slot: number; type: { name: string; url: string } }[];
  //
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
};

export type pokemonType = {
  name: string;
  url: string;
};

export type PokemonListResponseType = {
  results: pokemonType[];
};
