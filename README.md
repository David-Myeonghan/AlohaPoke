# Recently Viewed Pokemon

## IndexedDB

**객체 저장소(Object Store)**

- 역할: IndexedDB 에서 데이터를 저장하는 기본 단위. SQL 테이블과 유사.
- JS 객체 저장. key-value 쌍으로 구성.
- 생성시 고유 키 경로(key path) 지정 가능. 키 경로는 각 객체를 고유하게 식별하는 데 사용.
  <br />

**Index**

- 역할: 객체 저장소에 저장된 데이터를 빠르게 검색할 수 있도록 도와줌.
- 객체 저장소의 특정 속성을 기준으로 생성, 검색을 최적화하기 위해 사용.
- DB 에서 그 인덱스.
  <br />

**이벤트 발생 순서**

1. 'onupgradeneeded' - 데이터베이스 생성 또는 버전 업그레이드 시
2. 'onsuccess' - 데이터베이스 연결 성공 시
3. 'onerror' - 데이터베이스 연결 실패 또는 오류 발생 시
4. 'oncomplete' - 트랜잭션 완료 시
