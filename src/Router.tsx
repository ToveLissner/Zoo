import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import { Animal } from "./components/animals/animal/Animal";
import { Animals } from "./components/animals/Animals";

export const Router=createBrowserRouter([
    {path:"", element:<App/>, children:[
        {path: "/", element: <Animals/>, index: true},
        {path: "/animals", element: <Animals/>},
        {path: "/animal/:id", element:<Animal />}
    ]
}]);