import { useEffect, useState } from "react";
import IndexedDBSingleton, {
  RecentViewedPokemonType,
} from "utils/IndexedDB/IndexedDBSingleton";

export const getAllRecentPokemon = async (
  storeName: string,
  // key: IDBValidKey,
): Promise<RecentViewedPokemonType[]> => {
  const store = await IndexedDBSingleton.getTransaction(storeName);

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
};

// Method to add data
export const addRecentPokemon = async (
  storeName: string,
  data: RecentViewedPokemonType,
): Promise<IDBValidKey> => {
  const store = await IndexedDBSingleton.getTransaction(storeName, "readwrite");

  return new Promise((resolve, reject) => {
    const request = store.put(data);

    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
};
