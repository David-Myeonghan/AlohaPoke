// 1. Open a database.
let db;

// 디비 열기
const request = window.indexedDB.open("Recent Viewed Pokemon", 1);

// 제어 객체 생성
request.onerror = function (event) {
  console.log("error: ", event);
  alert("why didn't you allow my web app to use IndexedDB?");
};
request.onsuccess = function (event) {
  console.log("success: ", event);
  db = request.result;
};
// VER_ERR: 디스크에 저장된 디비 버전이 현재 코드에서 지정된 버전 번호보다 크다는 오류.

// 디비 버전 생성 또는 업데이트
request.onupgradeneeded = function (event) {
  // save the IDBDatabase interface
  let db = (event.target as IDBRequest).result;

  // Create an objectStore for this database
  let objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};

// 2. Create an object store in the database.

// 3. Start a transaction and make a request to do some database operation, like adding or retrieving data.

// 4. Wait for the operation to complete by listening to the right kind of DOM event.

// 5. Do something with the results (which can be found on the request object).

//
export default function runIndexedDB() {
  console.log("Executing Indexed DB");
}
