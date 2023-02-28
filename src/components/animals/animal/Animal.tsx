import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IAnimalDetailed } from "../../../models/IAnimalDetailed";
import { getAnimalById } from "../../../services/animalService";
import "./animal.scss";

export function Animal() {
    const [animal, setAnimal]=useState<IAnimalDetailed>();
    const [error, setError] = useState("");
    // const { feedAnimal } = useOutletContext<MyContext>();

    const { id }=useParams();

    useEffect (() => {
        const getData = async () => {
            if (id) {
                let response = await getAnimalById(+id);

                console.log(response);

                // if (response.animal) {
                    setAnimal(response);
                // } 
                // else {
                //     setError(response.error);
                // }
            }
        };
        if (animal) return;

        getData();

        console.log(animal);
    });

    const feedAnimal =()=>{

    };
  
    return (
    <>
        {error !== "" ? (
        <>
            <h2>{error}</h2>
        </>
        ) : (
        <>
            <div className="animal">
                <h1>{animal?.name}</h1>
                <div className="imageContainer">
                    <img src={animal?.imageUrl} alt={"Bild saknas"} />{" "}
                </div>
                <div className="descriptionContainer">
                    <p>{animal?.longDescription}</p>
                </div>
                
                <button onClick={feedAnimal}>Mata {animal?.name}</button>

                <div>Senast matad: {animal?.lastFed}</div>
                
            </div>
        </>
        )}
    </>
    );
}
