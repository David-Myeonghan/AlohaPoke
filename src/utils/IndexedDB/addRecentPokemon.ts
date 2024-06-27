import { IndexedDBPromise, RECENT_VIEW } from "./createInstance";

type RecentViewedPokemonType = {
  name: string;
  url: string;
};
export const addRecentPokemon = async (
  pokemonObj: RecentViewedPokemonType,
): Promise<void> => {
  try {
    const db = await IndexedDBPromise;
    const transaction = db.transaction(RECENT_VIEW, "readwrite");
    const objectStore = transaction.objectStore(RECENT_VIEW);

    const addRequest = objectStore.add(pokemonObj);

    addRequest.onsuccess = (event) => {
      console.log(event);
      console.log(pokemonObj);
    };
    addRequest.onerror = (event) => {
      console.error("Error adding Pokemon");
      console.error((event.target as IDBRequest).error);
    };
  } catch (err) {
    throw err;
  }
};
