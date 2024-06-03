import ky from "ky";

const POKE_BASE_URL = "https://pokeapi.co/api/v2/";

export const api = ky.create({ prefixUrl: POKE_BASE_URL });
