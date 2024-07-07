import { useEffect, useState } from "react";
import IndexedDBSingleton, {
  RECENT_VIEW,
  RecentViewedPokemonType,
} from "utils/IndexedDB/IndexedDBSingleton";
import { useLocation } from "react-router-dom";

export function useRecentPokemonList() {
  const { pathname } = useLocation();
  const [recentPokemonList, setRecentPokemonList] = useState<
    RecentViewedPokemonType[]
  >([]);

  const getAllRecentPokemon = async (
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

  useEffect(() => {
    getAllRecentPokemon(RECENT_VIEW).then((res) => {
      setRecentPokemonList(res);
    });
  }, [pathname]);

  return { recentPokemonList };
}
