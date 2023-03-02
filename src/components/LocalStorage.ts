const loacalStorageKey = "animals";

export const getList = <T>(): T[] => {
  let fromLS = localStorage.getItem(loacalStorageKey) || "[]";
  return JSON.parse(fromLS);
};

export const saveList = <T>(data: T[]) => {
  localStorage.setItem(loacalStorageKey, JSON.stringify(data));
};
