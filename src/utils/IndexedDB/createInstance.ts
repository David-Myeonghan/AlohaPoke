export const RECENT_VIEW = "Recent View";

// DB 연결이 이미 설정된 경우 캐싱된 결과 반환.
class IndexedDB {
  private static instance: Promise<IDBDatabase> | null = null;

  private constructor() {}

  public static getInstance(): Promise<IDBDatabase> {
    if (!IndexedDB.instance) {
      IndexedDB.instance = new Promise((resolve, reject) => {
        const request = indexedDB.open("MyDatabase", 1);

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
          const db = (event.target as IDBOpenDBRequest).result;
          const objectStore = db.createObjectStore(RECENT_VIEW, {
            keyPath: "name",
            autoIncrement: true,
          });
          // objectStore.createIndex("name", "name", { unique: false });
          // objectStore.createIndex("email", "email", { unique: true });
        };

        request.onsuccess = (event: Event) => {
          resolve((event.target as IDBOpenDBRequest).result);
        };

        request.onerror = (event: Event) => {
          reject((event.target as IDBOpenDBRequest).error);
        };
      });
    }
    return IndexedDB.instance;
  }
}

export default IndexedDB;
