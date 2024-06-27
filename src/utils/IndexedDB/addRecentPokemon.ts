import IndexedDB, { RECENT_VIEW } from "./createInstance";

export type RecentViewedPokemonType = {
  name: string;
  url: string;
};
export const addRecentPokemon = async (
  pokemonObj: RecentViewedPokemonType,
): Promise<void> => {
  try {
    const db = await IndexedDB.getInstance();
    const transaction = db.transaction(RECENT_VIEW, "readwrite");
    const objectStore = transaction.objectStore(RECENT_VIEW);

    const addRequest = objectStore.add(pokemonObj);

    addRequest.onsuccess = (event: any) => {
      console.log(pokemonObj);
    };
    addRequest.onerror = (event: any) => {
      console.error("Error adding Pokemon");
      console.error((event.target as IDBRequest).error);
    };
  } catch (err) {
    throw err;
  }
};
