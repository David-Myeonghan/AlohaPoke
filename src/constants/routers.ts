export const MAIN_LIST_ROUTERS = {
  index: "/main-list",
};

export const DETAIL_ROUTERS = {
  index: "/detail",
  POKEMON: (idOrName: string) => `${DETAIL_ROUTERS.index}/:${idOrName}`,
};
