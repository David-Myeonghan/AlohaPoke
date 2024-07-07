export const RECENT_VIEW = "Recent View";

export type RecentViewedPokemonType = {
  name: string;
  url: string;
};

export const createDB = (db: IDBDatabase) => {
  if (!db.objectStoreNames.contains(RECENT_VIEW)) {
    const objectStore = db.createObjectStore(RECENT_VIEW, {
      keyPath: "name",
      autoIncrement: true,
    });
    // create Index
    // objectStore.createIndex('name', 'name', {unique: false})
  }
};

class IndexedDBSingleton {
  // Private static instance
  static #instance: Promise<IDBDatabase> | null = null;

  private constructor() {}

  public static openDB(
    name: string,
    version: number,
    upgradeCallback?: (db: IDBDatabase) => void,
  ): Promise<IDBDatabase> {
    if (!IndexedDBSingleton.#instance) {
      IndexedDBSingleton.#instance = new Promise((resolve, reject) => {
        const request = indexedDB.open(name, version);

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (upgradeCallback) {
            // use callback for createObjectStore();
            upgradeCallback(db);
          }
        };
        request.onsuccess = (event) => {
          // IndexedDBSingleton.#instance = (
          //   event.target as IDBOpenDBRequest
          // ).result;
          resolve((event.target as IDBOpenDBRequest).result);
        };
        request.onerror = (event) => {
          reject((event.target as IDBOpenDBRequest).error);
        };
      });
    }
    return IndexedDBSingleton.#instance;
  }

  // Utility method to get a transaction
  public static async getTransaction(
    storeName: string,
    mode: IDBTransactionMode = "readonly",
  ): Promise<IDBObjectStore> {
    const instance = await IndexedDBSingleton.#instance;
    if (!instance) {
      throw new Error("Database not opened");
    }
    const transaction = instance.transaction(storeName, mode);
    return transaction.objectStore(storeName);
  }

  // Method to add data
  public static async addRecentPokemon(
    storeName: string,
    data: RecentViewedPokemonType,
  ): Promise<IDBValidKey> {
    const store = await IndexedDBSingleton.getTransaction(
      storeName,
      "readwrite",
    );

    return new Promise((resolve, reject) => {
      const request = store.put(data);

      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}

export default IndexedDBSingleton;
