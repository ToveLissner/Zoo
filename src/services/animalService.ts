import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const getAnimals = async (): Promise<IAnimal[]> => {
  let response = await axios.get(
    "https://animals.azurewebsites.net/api/animals"
  );
  return response.data;
};

// export const getAnimalById = async (id: number): Promise<IAnimal> => {
//   let response = await axios.get<IAnimal>(
//     "https://animals.azurewebsites.net/api/animals/" + id
//   );

//   return response.data;
// };
