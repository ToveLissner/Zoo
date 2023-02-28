export interface IAnimalDetailed {
  animal: any;
  error(error: any): unknown;
  id: number;
  name: string;
  yearOfBirth: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
}
