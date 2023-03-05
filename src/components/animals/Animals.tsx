import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal"
import { getAnimals } from "../../services/animalService";
import { getList, saveList } from "../LocalStorage";
import "./animals.scss";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    useEffect(() => {
        const getData = async () => {
            let animalsFromApi: IAnimal[] = await getAnimals();
            setAnimals(animalsFromApi);
        };

        if (animals.length>0) return;
        getData();
    });

    if (getList().length <= 0) {
        getList();
        saveList(animals);
    }

    let now = new Date().getTime();
    

    let animalListFromLS:IAnimal[]=getList();
    

    let animalsHtml = animalListFromLS.map((animal) => { 
        // let notisFeedAnimal = `${animal.name} är mätt`;
        let notisFeedAnimal = "";

        if(+now - new Date (animal.lastFed).getTime() > 14400000) {
            notisFeedAnimal=`${animal.name} behöver matas!`;
        }

        return (
                <div className="animals">
                    <h3>{animal.name}</h3>
                    <div className="imageContainer">
                        <img src={animal.imageUrl} alt={"Bild saknas"} />
                    </div>
                    <div className="descriptionContainer">
                    <p>{animal.shortDescription}</p>
                    </div>
                    <button type="button">
                        <Link to={`/animal/${animal.id}`}
                        key={animal.id}>Läs mer</Link> 
                    </button>
                    <div className="notisContainer">              
                        <div className="notis"> {notisFeedAnimal}</div>
                    </div> 
                </div>
        );
    });

    return <>
        {animalsHtml}
    </>;
}



