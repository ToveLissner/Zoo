import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import { getList, saveList } from "../../LocalStorage";
import "./animal.scss";

interface IAnimalNew {
    id: number,
    name: string,
    latinName: string,
    yearOfBirth: number;
    shortDescription: string,
    longDescription: string,
    imageUrl: string,
    medicine: string,
    isFed: boolean,
    lastFed: string,
}

export function Animal() {
    const [animal, setAnimal]=useState<IAnimalNew>(
        {id: 0, name: "",latinName:"", yearOfBirth:0, shortDescription:"",longDescription:"",imageUrl:"",medicine:"",isFed: false, lastFed:""}
    );

    // const [error, setError] = useState("");

    const param = useParams() as { id:string }

    useEffect (() => {

        let animalsFromLS: IAnimalNew[]=getList()

        animalsFromLS.map((animal) => {
            if (+param.id === animal.id) {
                console.log(animal);
                
            };

        });

        setAnimal(animal);

        saveList(animalsFromLS)},[param.id])

        const feedAnimal = () => {
            getList()
            animal.isFed=true
    
            console.log(animal);
    
            // saveList(animal);
        }

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
