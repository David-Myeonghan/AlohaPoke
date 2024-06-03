export const POKE_BASE_URL = process.env.REACT_APP_POKE_API_URL;

if (!POKE_BASE_URL) {
  console.error("base url undefined!");
}
