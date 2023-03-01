import { IAnimalDetailed } from "../models/IAnimalDetailed";

export const CalculateTime = (animal: IAnimalDetailed) => {
    const compareDates = new Date().getTime() - new Date(animal.lastFed).getTime();
    return new Date(compareDates).getSeconds();
}  



export const CalculateTime2 =()=> {
    const rightNow = new Date();
    
    const previousFeedTime = localStorage.getItem("animal");

}