import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import { IAnimalNew } from "../../../models/IAnimalNew";
import { getList, saveList } from "../../LocalStorage";
import "./animal.scss";

export function Animal() {
    const [animal, setAnimal]=useState<IAnimalNew>(
        {id: 0, name: "",latinName:"", 
        yearOfBirth:0, shortDescription:"",longDescription:"",imageUrl:"",medicine:"",isFed: false, lastFed:""}
    );

    // const [error, setError] = useState("");

    const param = useParams() as { id:string }

    const feedAnimal = () => {
        animal.isFed=true;
        let feedingTime = new Date();
        animal.lastFed=feedingTime.toLocaleString();
        setAnimal({...animal});

        console.log(animal);
    }

    const animalsInStorage = localStorage.getItem("animals")
    if (animalsInStorage) {
        let animalsList = JSON.parse(animalsInStorage)
    };

    useEffect (() => {
        let currentDate = new Date().getTime;
        setAnimal({...animal});

        let animalsFromLS: IAnimalNew[]=getList();

        animalsFromLS.map((animal) => {
            if (+currentDate - new Date(animal.lastFed).getTime() > 1080000) {
                animal.isFed = false
            };

            if (+param.id === animal.id) {
                animal = { ...animal }
                console.log(animal)
            };

            saveList(animalsFromLS);

        });

        setAnimal(animal);

},[param.id]);



        return (
            // <>
            //     {error !== "" ? (
            //     <>
            //         <h2>{error}</h2>
            //     </>
            //     ) : (
                <>
                    <div className="animal">
                        <h1>{animal?.name}</h1>
                        <div className="imageContainer">
                            <img src={animal?.imageUrl} alt={"Bild saknas"} />{" "}
                        </div>
                        <div className="descriptionContainer">
                            <p>{animal?.longDescription}</p>
                        </div>
                        
                        <button type="button" onClick={feedAnimal}>Mata {animal?.name}</button>
        
                        <div>Senast matad: {animal?.lastFed}</div>
                        
                    </div>
                </>
                // )}
            // </>
            );
}
