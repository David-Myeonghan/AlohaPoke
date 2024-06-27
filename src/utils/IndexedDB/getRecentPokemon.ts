import IndexedDB, { RECENT_VIEW } from "./createInstance";
import { RecentViewedPokemonType } from "./addRecentPokemon";

export const getAllRecentPokemon = async (): Promise<
  RecentViewedPokemonType[]
> => {
  try {
    const db = await IndexedDB.getInstance();
    const transaction = db.transaction(RECENT_VIEW, "readonly");
    const objectStore = transaction.objectStore(RECENT_VIEW);

    return new Promise((resolve, reject) => {
      // getAll(), or using cursor.
      const request = objectStore.getAll();
      request.onsuccess = (event) => {
        const pokemons = (event.target as IDBRequest).result;
        if (pokemons) {
          resolve(pokemons);
        }
      };
      request.onerror = (event) => {
        console.log(
          "Error reading all pokemons",
          (event.target as IDBRequest).error,
        );
        reject(event);
      };
    });
  } catch (err) {
    throw err;
  }
};
