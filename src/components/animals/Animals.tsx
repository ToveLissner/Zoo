import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal"
import { getAnimals } from "../../services/animalService";
import "./animals.scss";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            let animalsFromApi: IAnimal[] = await getAnimals();
            setAnimals(animalsFromApi);
        };
        if (animals.length>0) return;
        getData();
    });

    const handleClick =(id:number)=>{
        navigate(`/animal/${id}`);
    };

    let animalsHtml = animals.map((animal) => {
        return (
                <div className="animals" key={animal.id} onClick={()=>handleClick(animal.id)} >
                    <h3>{animal.name}</h3>
                    <div className="imageContainer">
                        <img src={animal.imageUrl} alt={"Bild saknas"} />
                    </div>
                    <button type="button">Läs mer</button>
                </div>
        );
    });

    return <>
        {animalsHtml}
    </>;
}



