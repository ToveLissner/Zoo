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

                console.log(response.id);

                if (response) {
                    setAnimal(response);
                } 

                // else {
                //     setError(response.error);
                // }

            }
        };

        if (animal) return;
        getData();
    });

    let animalList:IAnimalDetailed[]=[];

    const feedAnimal =()=>{  
    getList();
    saveList();
    }

    const saveList = () => {
        const animals: IAnimalDetailed[] = animalList;
        localStorage.setItem("animals", JSON.stringify(animals));

        const animalAsString =JSON.stringify(animal);
        localStorage.setItem("animal", animalAsString); 
    };

    // const animalsList: IAnimalDetailed = animal?.;

    const getList = () => {

        const animalListJSON: string = localStorage.getItem("animal") || "";
        
        if (animalListJSON) {
            let animalListLS: IAnimalDetailed[]=JSON.parse(animalListJSON);

            animalList = animalListLS;

            // const existingAnimalItemIndex = animalList.findIndex((animalItem)=>animalItem.id === animalsList.id);
        }

                    //     const existingCartItemindex = cartList.findIndex(
            //       (cartItem) => cartItem.id === productList.id
            //     );
            
            //     if (existingCartItemindex >= 0) {
            //       cartList[existingCartItemindex].amount++; // = userAmount
            //     } else {
            //       productList.amount++; // = userAmount
            //       cartList.push(productList);
            //     }
            //     localStorage.setItem("cartList", JSON.stringify(cartList));
            //   });


             // animalList.push(fromLS);
            // if (fromLS) {
            //     animalList.push(fromLS);
            // }

        // const fromLS: IAnimalDetailed = JSON.parse(localStorage.getItem("animal") || "");

        // animalList.push(fromLS);
            // if (fromLS) {
            //     animalList.push(fromLS);
            // }


        
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
