import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal"
import { getAnimals } from "../../services/animalService";
import { getList, saveList } from "../LocalStorage";
import "./animals.scss";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    // const navigate = useNavigate();

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

    // const handleClick =(id:number)=>{
    //     navigate(`/animal/${id}`);
    // };

    let animalsHtml = animals.map((animal) => {
        return (
                // <div className="animals" key={animal.id} onClick={()=>handleClick(animal.id)} >
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
                </div>
        );
    });

    return <>
        {animalsHtml}
    </>;
}



