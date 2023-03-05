import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../../models/IAnimal";
import { getList, saveList } from "../../LocalStorage";
import "./animal.scss";

export function Animal() {
    const [animal, setAnimal]=useState<IAnimal>(
        {id: 0, name: "",latinName:"", yearOfBirth:0, shortDescription:"",longDescription:"",imageUrl:"",medicine:"",isFed: false, lastFed:""}
    );

    const param = useParams() as { id:string }

    let animalListFromLS:IAnimal[]=getList();
    let now = new Date().getTime();

    useEffect (() => {
        for (let i=0; i<animalListFromLS.length; i++){
            if (+now - new Date(animalListFromLS[i].lastFed).getTime() > 10800000) {
                animalListFromLS[i].isFed = false;
            }  

            if (+param.id===animalListFromLS[i].id){
                setAnimal(animalListFromLS[i]);
            }
        }
        saveList(animalListFromLS);
    },[param.id])

    function feedAnimal(animal:IAnimal){
    let animalToFeed = {
        ...animal,
        isFed: true,
        lastFed: new Date().toLocaleString(),
    };
       setAnimal(animalToFeed);
    
       for (let i=0; i<animalListFromLS.length; i++){  
        if (animalListFromLS[i].id===animalToFeed.id){
            animalListFromLS[i]=animalToFeed;}
        }
        saveList(animalListFromLS);
    } 

    return (
        <>
                     <div className="animal">
                        <div className="cont1">
                         <div className="imageContainer">
                             <img src={animal.imageUrl} alt={"Bild saknas"} />{" "}
                         </div>
                         <p>
                            Senast matad: {animal.lastFed} 
                        </p>
                        {animal.isFed ? (
                        <button type="button" className="buttonFed" disabled>
                            {animal.name} är inte hungrig!
                        </button>
                        ) : (
                        <button
                        type="button"
                        className="buttonHungry"
                        onClick={() => {
                            feedAnimal(animal)
                          }}
                        >
                        Mata {animal.name} 
                        </button>
                        )}</div>
                    <div className="cont2">
                         <h1>{animal.name}</h1>
                         <div className="descriptionContainer">
                             <p>{animal.longDescription}</p>
                         </div>
                         <div className="factContainer">
                            <div className="facts">
                                <h4>Latinskt namn:</h4>
                                <span>{animal.latinName}</span>
                            </div>
                            <div className="facts"> 
                                <h4>Mediciner:</h4>
                                <span>{animal.medicine}</span>
                            </div>
                            <div className="facts"> 
                                <h4>Födelseår:</h4>
                                <span>{animal.yearOfBirth}</span>
                            </div>
                         </div>
                         </div>
                     </div>
        </>
    );

}

// 🥬🥒🥦🍅🥕🌽🍓
