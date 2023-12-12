import { createBrowserRouter, } from "react-router-dom";
//importa vistas
import Inicio from "./views/Inicio.jsx";
import Ingresar from "./views/Ingresar.jsx";
import Eliminar from "./views/Eliminar.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>
    },
    {
        path: "/ingresar",
        element: <Ingresar/>,
    },
    {
        path: "/eliminar",
        element: <Eliminar/>,
    },
]);

