import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { IAnimalDetailed } from "../models/IAnimalDetailed";

export const getAnimals = async (): Promise<IAnimal[]> => {
  let response = await axios.get(
    "https://animals.azurewebsites.net/api/animals"
  );
  return response.data;
};

export const getAnimalById = async (id: number): Promise<IAnimalDetailed> => {
  let response = await axios.get<IAnimalDetailed>(
    "https://animals.azurewebsites.net/api/animals/" + id
  );

  return response.data;
};
