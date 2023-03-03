import { IAnimal } from "../models/IAnimal";

const loacalStorageKey = "animals";

export const getList = (): IAnimal[] => {
  let fromLS = localStorage.getItem(loacalStorageKey) || "[]";
  return JSON.parse(fromLS);
};

export const saveList = (data: IAnimal[]) => {
  localStorage.setItem(loacalStorageKey, JSON.stringify(data));
};
