import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import { Animal } from "./components/animals/animal/Animal";
import { Animals } from "./components/animals/Animals";

export const Router=createBrowserRouter([
    {path:"", element:<App/>, children:[
        {path: "/animals", element: <Animals/>, index: true},
        {path: "/animal/:id", element:<Animal />}
    ]
}]);

            // const getData = async () => {
        //     if (id) {
        //         let response = await getAnimalById(+id);

        //         if (response) {
        //             setAnimal(response);
        //         } 