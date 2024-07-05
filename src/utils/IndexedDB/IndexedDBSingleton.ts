import { addRecentPokemon } from "./addRecentPokemon";
import { getAllRecentPokemon } from "./getRecentPokemon";

export const RECENT_VIEW = "Recent View";

type RecentViewedPokemonType = {
  name: string;
  url: string;
};

class IndexedDB {
  // Private static instance
  static #instance: IDBDatabase | null = null;

  private constructor() {}

  public static openDB(
    name: string,
    version: number,
    upgradeCallback?: (db: IDBDatabase) => void,
  ): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      if (IndexedDB.#instance) {
        resolve(IndexedDB.#instance);
        return;
      }

      const request = indexedDB.open(name, version);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (upgradeCallback) {
          // use callback for createObjectStore();
          upgradeCallback(db);
        }
      };
      request.onsuccess = (event) => {
        IndexedDB.#instance = (event.target as IDBOpenDBRequest).result;
        resolve(IndexedDB.#instance);
      };
      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  // Utility method to get a transaction
  public static getTransaction(
    storeName: string,
    mode: IDBTransactionMode = "readonly",
  ): IDBObjectStore {
    if (!IndexedDB.#instance) {
      throw new Error("Database not opened");
    }
    const transaction = IndexedDB.#instance.transaction(storeName, mode);
    return transaction.objectStore(storeName);
  }

  // Method to add data
  public static addRecentPokemon(
    storeName: string,
    data: RecentViewedPokemonType,
  ): Promise<IDBValidKey> {
    return new Promise((resolve, reject) => {
      const store = IndexedDB.getTransaction(storeName, "readwrite");
      const request = store.add(data);

      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  public static getAllRecentPokemon(
    storeName: string,
    key: IDBValidKey,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const store = IndexedDB.getTransaction(storeName);
      const request = store.get(key);

      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}

export default IndexedDB;
