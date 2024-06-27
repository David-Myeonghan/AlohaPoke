import { IndexedDBPromise, RECENT_VIEW } from "./createInstance";

export const getAllRecentPokemon = async (): Promise<void> => {
  try {
    const db = await IndexedDBPromise;
    const transaction = db.transaction(RECENT_VIEW, "readonly");
    const objectStore = transaction.objectStore(RECENT_VIEW);

    // getAll(), or using cursor.
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
      const customers = (event.target as IDBRequest).result;
      console.log(customers);
    };

    request.onerror = (event) => {
      console.log(
        "Error reading all pokemons",
        (event.target as IDBRequest).error,
      );
    };
  } catch (err) {
    throw err;
  }
};
