export const RECENT_VIEW = "Recent View";

// DB 연결이 이미 설정된 경우 캐싱된 결과 반환.
export const IndexedDBPromise = new Promise<IDBDatabase>((resolve, reject) => {
  // 1. Open a database.
  const DBOpenRequest = indexedDB.open("MyDatabase", 1);

  // 디비 버전 생성 또는 업데이트 시 호출되는 콜백 함수
  DBOpenRequest.onupgradeneeded = (event) => {
    // 2. 제어 객체 생성
    const db = (event.target as IDBOpenDBRequest).result;
    // 이름이 RECENT_VIEW 인 객체 저장소 생성. 'name' 속성을 키 경로로 사용하여 각 객체를 고유하게 식별
    const objectStore = db.createObjectStore(RECENT_VIEW, {
      keyPath: "name",
      autoIncrement: true,
    });
    // Optional - create index.
    // 'name' 인덱스 만들기. 고유하지 않은 값 허용.
    // 1st arg: 인덱스의 이름. DB 내에서 인덱스 식별에 사용
    // 2nd arg: 인덱스가 참조할 객체의 속성.
    // objectStore.createIndex("name", "name", { unique: true });

    DBOpenRequest.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result as IDBDatabase);
    };
    DBOpenRequest.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  };
});
